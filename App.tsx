
import React, { useState, useEffect, useCallback, useRef } from 'react';
import type { Question, StudentData, QuizResult, Page } from './types';
// FIX: Corrected typo from LOGO_BASE664 to LOGO_BASE64
import { QUIZ_QUESTIONS, QUIZ_SUBJECT, QUIZ_TOPIC, GOOGLE_FORM_URL, ENTRY_IDS, getFeedbackMessage, LOGO_BASE64, CORRECT_ANSWER_SOUND_B64, WRONG_ANSWER_SOUND_B64 } from './constants';

// Fix: Add a global declaration for window.MathJax to resolve TypeScript errors.
declare global {
  interface Window {
    MathJax: any;
  }
}

// Utility functions for data compression/decompression
declare const pako: any;

const compressData = (data: object): string => {
  try {
    const jsonString = JSON.stringify(data);
    const compressed = pako.deflate(jsonString, { to: 'string' });
    return btoa(compressed);
  } catch (error) {
    console.error("Compression failed:", error);
    return "";
  }
};

const decompressData = <T,>(base64String: string): T | null => {
  try {
    const binaryString = atob(base64String);
    const jsonString = pako.inflate(binaryString, { to: 'string' });
    return JSON.parse(jsonString);
  } catch (error) {
    console.error("Decompression failed:", error);
    return null;
  }
};

const playAudio = (base64Audio: string) => {
  try {
    const audio = new Audio(base64Audio);
    audio.play().catch(e => console.error("Audio play failed", e));
  } catch (error) {
    console.error("Failed to play audio:", error);
  }
};

// --- Helper Components (Defined outside main App component) ---

interface StudentInfoPageProps {
  onStartQuiz: (studentData: StudentData) => void;
}

const StudentInfoPage: React.FC<StudentInfoPageProps> = ({ onStartQuiz }) => {
  const [name, setName] = useState('');
  const [branch, setBranch] = useState('Permas分院');
  const [grade, setGrade] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !branch || !grade.trim()) {
      setError('请填写所有信息。');
      return;
    }
    setError('');
    onStartQuiz({ name, branch, grade });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-black">学生信息</h2>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-black">姓名 (Name)</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
          placeholder="请输入你的名字"
        />
      </div>
      <div>
        <label htmlFor="branch" className="block text-sm font-medium text-black">分院 (Cawangan)</label>
        <select
          id="branch"
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
        >
          <option>Permas分院</option>
          <option>Masai分院</option>
        </select>
      </div>
      <div>
        <label htmlFor="grade" className="block text-sm font-medium text-black">年级 (Grade)</label>
        <input
          type="text"
          id="grade"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
          placeholder="例如: Form 4"
        />
      </div>
      <button
        type="submit"
        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
      >
        开始测验
      </button>
    </form>
  );
};

interface ProgressBarProps {
    current: number;
    total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
    const percentage = total > 0 ? (current / total) * 100 : 0;

    return (
        // Use grid to center the text content easily
        <div className="w-full bg-gray-200 rounded-full h-4 relative grid place-items-center">
            {/* Dark text for the unfilled part of the bar (base layer) */}
            <span className="text-xs font-bold text-gray-700">
                {current} / {total}
            </span>

            {/* Gradient fill with white text for the filled part of the bar (top layer) */}
            {/* This layer is clipped to match the quiz progress percentage */}
            <div
                className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full grid place-items-center"
                style={{
                    clipPath: `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`,
                    transition: 'clip-path 500ms ease-in-out',
                }}
            >
                <span className="text-xs font-bold text-white">
                    {current} / {total}
                </span>
            </div>
        </div>
    );
};


interface QuizPageProps {
  questions: Question[];
  onQuizComplete: (result: QuizResult) => void;
}

const QuizPage: React.FC<QuizPageProps> = ({ questions, onQuizComplete }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const [userAnswers, setUserAnswers] = useState<any[]>([]);
    const [time, setTime] = useState(0);
    const questionContainerRef = useRef<HTMLDivElement>(null);
    const currentQuestion = questions[currentQuestionIndex];

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        // This effect ensures MathJax processes content whenever the question
        // or the selected answer changes, ensuring formulas are always rendered.
        if (window.MathJax && questionContainerRef.current) {
            window.MathJax.typesetPromise([questionContainerRef.current])
              .catch((err: any) => console.error('MathJax typesetting failed:', err));
        }
    }, [currentQuestion, selectedAnswer]);

    const handleAnswerSelect = (option: string) => {
        if (selectedAnswer !== null) return;

        const correct = option === currentQuestion.answer;

        if (correct) {
            playAudio(CORRECT_ANSWER_SOUND_B64);
        } else {
            playAudio(WRONG_ANSWER_SOUND_B64);
        }

        setSelectedAnswer(option);
        setIsCorrect(correct);
        if (!correct) {
            setShowExplanation(true);
        }

        setUserAnswers([
            ...userAnswers,
            {
                question: currentQuestion.question,
                selected: option,
                correct: currentQuestion.answer,
                isCorrect: correct,
            },
        ]);
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
            setSelectedAnswer(null);
            setIsCorrect(null);
            setShowExplanation(false);
        } else {
            const correctCount = userAnswers.filter(a => a.isCorrect).length;
            const totalQuestions = questions.length;
            const score = Math.round((correctCount / totalQuestions) * 100);
            const minutes = Math.floor(time / 60);
            const seconds = time % 60;
            const timeTaken = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            onQuizComplete({
                score,
                correctCount,
                totalQuestions,
                timeTaken,
                answers: userAnswers,
            });
        }
    };

    return (
        <div ref={questionContainerRef} className="space-y-6">
            <div className="flex justify-between items-center text-gray-600 space-x-4">
                <ProgressBar current={currentQuestionIndex + 1} total={questions.length} />
                <p className="font-medium whitespace-nowrap">用时: {Math.floor(time / 60).toString().padStart(2, '0')}:{ (time % 60).toString().padStart(2, '0')}</p>
            </div>
            <div className="text-lg font-semibold text-gray-800">{currentQuestion.question}</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentQuestion.options.map((option, index) => {
                    let buttonClass = "w-full text-left p-4 rounded-lg border-2 transition-all duration-200 text-black bg-white hover:bg-gray-50";
                    if (selectedAnswer !== null) {
                        const isSelected = option === selectedAnswer;
                        const isAnswer = option === currentQuestion.answer;

                        if (isAnswer) {
                            buttonClass += " bg-green-100 border-green-500 text-green-800 font-bold";
                        } else if (isSelected && !isCorrect) {
                            buttonClass += " bg-red-100 border-red-500 text-red-800 font-bold";
                        } else {
                            buttonClass += " border-gray-300 opacity-60 cursor-not-allowed";
                        }
                    } else {
                        buttonClass += " border-gray-300 cursor-pointer";
                    }

                    return (
                        <button
                            key={index}
                            onClick={() => handleAnswerSelect(option)}
                            disabled={selectedAnswer !== null}
                            className={buttonClass}
                        >
                            {option}
                        </button>
                    );
                })}
            </div>

            {showExplanation && (
                <div className="p-4 bg-yellow-50 border border-yellow-300 rounded-lg mt-4">
                    <h3 className="font-bold text-yellow-800">解题思路</h3>
                    <p className="text-yellow-700 mt-2">{currentQuestion.explanation}</p>
                </div>
            )}

            {selectedAnswer !== null && (
                <button
                    onClick={handleNextQuestion}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    {currentQuestionIndex < questions.length - 1 ? '下一题' : '完成测验'}
                </button>
            )}
        </div>
    );
};

interface ReportPageProps {
  result: QuizResult;
  studentData: StudentData;
  onRetry: () => void;
}

const ReportPage: React.FC<ReportPageProps> = ({ result, studentData, onRetry }) => {
    const [shareableLink, setShareableLink] = useState('');

    useEffect(() => {
        const dataToShare = { result, studentData };
        const compressed = compressData(dataToShare);
        const link = `${window.location.origin}${window.location.pathname}?data=${compressed}`;
        setShareableLink(link);
    }, [result, studentData]);

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(shareableLink).then(() => {
            alert('报告链接已复制到剪贴板！');
        }, () => {
            alert('复制失败，请手动复制。');
        });
    };
    
    useEffect(() => {
        // Typeset math in report details if any
        if (window.MathJax) {
            (window.MathJax as any).typesetPromise();
        }
    }, []);

    const percentage = result.score;

    return (
        <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">成绩报告单</h2>
            <div className="p-6 bg-gray-50 rounded-lg shadow-inner">
                <div className="grid grid-cols-2 gap-4 text-left text-sm text-gray-600">
                    <p><strong>姓名:</strong> {studentData.name}</p>
                    <p><strong>分院:</strong> {studentData.branch}</p>
                    <p><strong>年级:</strong> {studentData.grade}</p>
                    <p><strong>科目:</strong> {QUIZ_SUBJECT}</p>
                </div>
            </div>

            <div className="flex items-center justify-around p-6">
                <div>
                    <p className="text-lg text-gray-600">得分</p>
                    <p className={`text-7xl font-bold ${percentage >= 50 ? 'text-green-600' : 'text-red-600'}`}>{percentage}<span className="text-3xl">%</span></p>
                </div>
                <div>
                    <p className="text-lg text-gray-600">正确率</p>
                    <p className="text-4xl font-semibold text-gray-700">{result.correctCount} / {result.totalQuestions}</p>
                    <p className="text-lg text-gray-600 mt-4">用时</p>
                    <p className="text-4xl font-semibold text-gray-700">{result.timeTaken}</p>
                </div>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="font-semibold text-blue-800">{getFeedbackMessage(percentage)}</p>
            </div>

            <div className="space-y-4">
                 <div className="relative">
                    <input
                        type="text"
                        readOnly
                        value={shareableLink}
                        className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 text-xs"
                    />
                    <button onClick={handleCopyToClipboard} className="absolute right-1 top-1/2 -translate-y-1/2 px-2 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600">复制</button>
                </div>
                <button
                    onClick={onRetry}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                    再试一次
                </button>
            </div>
        </div>
    );
};


// --- Main App Component ---

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Page>('info');
    const [studentData, setStudentData] = useState<StudentData | null>(null);
    const [quizResult, setQuizResult] = useState<QuizResult | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const data = urlParams.get('data');
        if (data) {
            const decompressedData = decompressData<{ result: QuizResult, studentData: StudentData }>(data);
            if (decompressedData) {
                setQuizResult(decompressedData.result);
                setStudentData(decompressedData.studentData);
                setCurrentPage('report');
            }
        }
        setIsLoading(false);
    }, []);

    const handleStartQuiz = (data: StudentData) => {
        const shuffled = [...QUIZ_QUESTIONS]
            .sort(() => Math.random() - 0.5) // Shuffle questions
            .map(question => ({ // For each question...
                ...question, // copy the question properties
                options: [...question.options].sort(() => Math.random() - 0.5) // ...and shuffle its options
            }));
        setShuffledQuestions(shuffled);
        setStudentData(data);
        setCurrentPage('quiz');
    };

    const submitToGoogleForm = useCallback(async (result: QuizResult, data: StudentData, link: string) => {
        const formData = new FormData();
        const now = new Date();
        formData.append(ENTRY_IDS.timestamp, now.toLocaleString('en-CA'));
        formData.append(ENTRY_IDS.name, data.name);
        formData.append(ENTRY_IDS.branch, data.branch);
        formData.append(ENTRY_IDS.grade, data.grade);
        formData.append(ENTRY_IDS.score, `${result.score}%`);
        formData.append(ENTRY_IDS.percentage, `${result.correctCount}/${result.totalQuestions}`);
        formData.append(ENTRY_IDS.topic, QUIZ_TOPIC);
        formData.append(ENTRY_IDS.reportLink, link);
        
        try {
            await fetch(GOOGLE_FORM_URL, {
                method: 'POST',
                body: formData,
                mode: 'no-cors',
            });
        } catch (error) {
            console.error('Error submitting to Google Form:', error);
        }
    }, []);

    const handleQuizComplete = useCallback((result: QuizResult) => {
        setQuizResult(result);
        setCurrentPage('report');
        if (studentData) {
            const dataToShare = { result, studentData };
            const compressed = compressData(dataToShare);
            const link = `${window.location.origin}${window.location.pathname}?data=${compressed}`;
            submitToGoogleForm(result, studentData, link);
        }
    }, [studentData, submitToGoogleForm]);

    const handleRetry = () => {
        setQuizResult(null);
        setStudentData(null);
        setCurrentPage('info');
        window.history.pushState({}, '', window.location.pathname);
    };

    const renderPage = () => {
        if (isLoading) {
            return <div className="text-center p-10">加载中...</div>;
        }
        switch (currentPage) {
            case 'info':
                return <StudentInfoPage onStartQuiz={handleStartQuiz} />;
            case 'quiz':
                return <QuizPage questions={shuffledQuestions} onQuizComplete={handleQuizComplete} />;
            case 'report':
                if (quizResult && studentData) {
                    return <ReportPage result={quizResult} studentData={studentData} onRetry={handleRetry} />;
                }
                // Fallback if data is missing
                return <StudentInfoPage onStartQuiz={handleStartQuiz} />;
            default:
                return <StudentInfoPage onStartQuiz={handleStartQuiz} />;
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4 font-sans">
            <main className="w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden my-8">
                <header className="p-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                    <div className="flex items-center space-x-4">
                        <img 
                          src={LOGO_BASE64}
                          alt="Logo" 
                          className="h-12 w-12" 
                        />
                        <div>
                            <h1 className="text-2xl font-bold">学品教育学院</h1>
                            <p className="text-sm opacity-90">{QUIZ_TOPIC}</p>
                        </div>
                    </div>
                </header>
                <div className="p-6 md:p-8">
                    {renderPage()}
                </div>
            </main>
        </div>
    );
};

export default App;
