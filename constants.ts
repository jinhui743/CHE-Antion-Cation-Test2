// ====================================================================================
// 【重要】请将下面的 `LOGO_BASE64` 变量替换为你的 Base64 编码的 Logo 字符串
// ====================================================================================
export const LOGO_BASE64 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiIHdpZHRoPSI0OHB4IiBoZWlnaHQ9IjQ4cHgiPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMTIgM0w0IDEydi02aDJ2NGw2LTQuNSA2IDQuNXYtNGgydjZMMTIgM3ptLTEgNS41bDYgNC41di04bC02IDMuNXpNNiAycDMuNUw2IDQuN1Yyem05IDBoMy41bC0zLjUgMi41VjJ6TTQgMTJoMi41TDEwIDE3di0zTDQgMTJ6bTE2IDBsLTYgNXYtM2wzLjUgNC41SDE0bC00LTZIMTRsLTMuNS01SDE0bDQgNnoiLz48L3N2Zz4=";

import { Question } from './types';

export const QUIZ_SUBJECT = "化学离子测验";
export const QUIZ_TOPIC = "CHE Antion Cation Test";

export const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSd77AOWGYiC6QWqKQLs1ktDX2Mz2gSs5D7-9AFEKM18QG2dFQ/formResponse";

export const ENTRY_IDS = {
  timestamp: "entry.1104502796",
  name: "entry.1734280046",
  branch: "entry.324392523",
  grade: "entry.334192525",
  score: "entry.1197406020",
  percentage: "entry.331240590",
  topic: "entry.1909146688",
  reportLink: "entry.2063783972"
};

export const QUIZ_QUESTIONS: Question[] = [
  {
    "question": "What is the ion for Potassium / Apakah ion untuk Kalium?",
    "options": ["\\(K^{2+}\\)", "\\(K^{-}\\)", "\\(K^{+}\\)", "\\(Ka^{+}\\)"],
    "answer": "\\(K^{+}\\)",
    "explanation": "正确答案是 \\(K^{+}\\)。钾(Potassium)是第一主族的碱金属元素，在化学反应中容易失去一个电子，形成带一个单位正电荷的阳离子。"
  },
  {
    "question": "What is the ion for Sodium / Apakah ion untuk Natrium?",
    "options": ["\\(Na^{2+}\\)", "\\(N^{+}\\)", "\\(Na^{+}\\)", "\\(So^{+}\\)"],
    "answer": "\\(Na^{+}\\)",
    "explanation": "正确答案是 \\(Na^{+}\\)。钠(Sodium)是第一主族的碱金属元素，在化学反应中容易失去一个电子，形成带一个单位正电荷的阳离子。"
  },
  {
    "question": "What is the ion for Lithium / Apakah ion untuk Litium?",
    "options": ["\\(L^{+}\\)", "\\(Li^{-}\\)", "\\(Li^{2+}\\)", "\\(Li^{+}\\)"],
    "answer": "\\(Li^{+}\\)",
    "explanation": "正确答案是 \\(Li^{+}\\)。锂(Lithium)是第一主族的碱金属元素，在化学反应中容易失去一个电子，形成带一个单位正电荷的阳离子。"
  },
  {
    "question": "What is the ion for Hydrogen / Apakah ion untuk Hidrogen?",
    "options": ["\\(H^{2+}\\)", "\\(H_2\\)", "\\(H^{+}\\)", "\\(Hy^{+}\\)"],
    "answer": "\\(H^{+}\\)",
    "explanation": "正确答案是 \\(H^{+}\\)。氢(Hydrogen)原子在失去一个电子后，形成氢离子，即质子。"
  },
  {
    "question": "What is the ion for Silver / Apakah ion untuk Argentum?",
    "options": ["\\(Ar^{+}\\)", "\\(Ag^{2+}\\)", "\\(S^{+}\\)", "\\(Ag^{+}\\)"],
    "answer": "\\(Ag^{+}\\)",
    "explanation": "正确答案是 \\(Ag^{+}\\)。银(Silver)是一种过渡金属，通常形成稳定的+1价阳离子。"
  },
  {
    "question": "What is the ion for Mercury / Apakah ion for Merkuri?",
    "options": ["\\(Me^{+}\\)", "\\(Hg^{+}\\)", "\\(Me^{2+}\\)", "\\(Hg^{2+}\\)"],
    "answer": "\\(Hg^{+}\\)",
    "explanation": "正确答案是 \\(Hg^{+}\\)。汞(Mercury)可以形成+1或+2价离子。\\(Hg^{+}\\)实际上是以二聚体离子 \\(Hg_2^{2+}\\) 的形式存在，但题目中通常简化表示。"
  },
  {
    "question": "What is the ion for Ammonium / Apakah ion untuk Ammonium?",
    "options": ["\\(N_4^{+}\\)", "\\(NH_4^{+}\\)", "\\(Am^{+}\\)", "\\(NH_3^{+}\\)"],
    "answer": "\\(NH_4^{+}\\)",
    "explanation": "正确答案是 \\(NH_4^{+}\\)。铵根离子(Ammonium)是由一个氮原子和四个氢原子形成的复合阳离子。"
  },
  {
    "question": "What is the ion for Calcium / Apakah ion untuk Kalsium?",
    "options": ["\\(Ca^{+}\\)", "\\(C^{2+}\\)", "\\(Ca^{2+}\\)", "\\(Cal^{2+}\\)"],
    "answer": "\\(Ca^{2+}\\)",
    "explanation": "正确答案是 \\(Ca^{2+}\\)。钙(Calcium)是第二主族的碱土金属元素，容易失去两个电子，形成带两个单位正电荷的阳离子。"
  },
  {
    "question": "What is the ion for Magnesium / Apakah ion untuk Magnesium?",
    "options": ["\\(Mg^{+}\\)", "\\(Mg^{3+}\\)", "\\(Ma^{2+}\\)", "\\(Mg^{2+}\\)"],
    "answer": "\\(Mg^{2+}\\)",
    "explanation": "正确答案是 \\(Mg^{2+}\\)。镁(Magnesium)是第二主族的碱土金属元素，容易失去两个电子，形成带两个单位正电荷的阳离子。"
  },
  {
    "question": "What is the ion for Zinc / Apakah ion untuk Zink?",
    "options": ["\\(Z^{+}\\)", "\\(Zi^{2+}\\)", "\\(Zn^{+}\\)", "\\(Zn^{2+}\\)"],
    "answer": "\\(Zn^{2+}\\)",
    "explanation": "正确答案是 \\(Zn^{2+}\\)。锌(Zinc)是一种过渡金属，通常形成稳定的+2价阳离子。"
  },
  {
    "question": "What is the ion for Barium / Apakah ion untuk Barium?",
    "options": ["\\(Ba^{+}\\)", "\\(Bar^{2+}\\)", "\\(Ba^{2+}\\)", "\\(Bi^{2+}\\)"],
    "answer": "\\(Ba^{2+}\\)",
    "explanation": "正确答案是 \\(Ba^{2+}\\)。钡(Barium)是第二主族的碱土金属元素，容易失去两个电子，形成带两个单位正电荷的阳离子。"
  },
  {
    "question": "What is the ion for Iron (II) / Apakah ion untuk Ferum (II)?",
    "options": ["\\(Fe^{3+}\\)", "\\(F^{2+}\\)", "\\(Ir^{2+}\\)", "\\(Fe^{2+}\\)"],
    "answer": "\\(Fe^{2+}\\)",
    "explanation": "正确答案是 \\(Fe^{2+}\\)。亚铁离子(Iron II)指的是铁失去两个电子后形成的离子，带两个单位正电荷。"
  },
  {
    "question": "What is the ion for Tin (II) / Apakah ion for Stanum (II)?",
    "options": ["\\(S^{2+}\\)", "\\(Sn^{4+}\\)", "\\(Ti^{2+}\\)", "\\(Sn^{2+}\\)"],
    "answer": "\\(Sn^{2+}\\)",
    "explanation": "正确答案是 \\(Sn^{2+}\\)。亚锡离子(Tin II)指的是锡失去两个电子后形成的离子，带两个单位正电荷。"
  },
  {
    "question": "What is the ion for Lead (II) / Apakah ion for Plumbum (II)?",
    "options": ["\\(P^{2+}\\)", "\\(Pb^{4+}\\)", "\\(Lb^{2+}\\)", "\\(Pb^{2+}\\)"],
    "answer": "\\(Pb^{2+}\\)",
    "explanation": "正确答案是 \\(Pb^{2+}\\)。亚铅离子(Lead II)指的是铅失去两个电子后形成的离子，带两个单位正电荷。"
  },
  {
    "question": "What is the ion for Copper (II) / Apakah ion untuk Kuprum (II)?",
    "options": ["\\(Co^{2+}\\)", "\\(Cu^{+}\\)", "\\(Cp^{2+}\\)", "\\(Cu^{2+}\\)"],
    "answer": "\\(Cu^{2+}\\)",
    "explanation": "正确答案是 \\(Cu^{2+}\\)。铜离子(Copper II)指的是铜失去两个电子后形成的离子，带两个单位正电荷，通常呈蓝色。"
  },
  {
    "question": "What is the ion for Manganese (II) / Apakah ion untuk Mangan (II)?",
    "options": ["\\(Mg^{2+}\\)", "\\(Mn^{+}\\)", "\\(Ma^{2+}\\)", "\\(Mn^{2+}\\)"],
    "answer": "\\(Mn^{2+}\\)",
    "explanation": "正确答案是 \\(Mn^{2+}\\)。亚锰离子(Manganese II)指的是锰失去两个电子后形成的离子，带两个单位正电荷。"
  },
  {
    "question": "What is the ion for Aluminium / Apakah ion untuk Aluminium?",
    "options": ["\\(Al^{2+}\\)", "\\(Am^{3+}\\)", "\\(A^{3+}\\)", "\\(Al^{3+}\\)"],
    "answer": "\\(Al^{3+}\\)",
    "explanation": "正确答案是 \\(Al^{3+}\\)。铝(Aluminium)是第十三主族的金属元素，容易失去三个电子，形成带三个单位正电荷的阳离子。"
  },
  {
    "question": "What is the ion for Iron (III) / Apakah ion untuk Ferum (III)?",
    "options": ["\\(F^{3+}\\)", "\\(Ir^{3+}\\)", "\\(Fe^{2+}\\)", "\\(Fe^{3+}\\)"],
    "answer": "\\(Fe^{3+}\\)",
    "explanation": "正确答案是 \\(Fe^{3+}\\)。铁离子(Iron III)指的是铁失去三个电子后形成的离子，带三个单位正电荷。"
  },
  {
    "question": "What is the ion for Chromium (III) / Apakah ion untuk Kromium (III)?",
    "options": ["\\(C^{3+}\\)", "\\(Ch^{3+}\\)", "\\(Cr^{2+}\\)", "\\(Cr^{3+}\\)"],
    "answer": "\\(Cr^{3+}\\)",
    "explanation": "正确答案是 \\(Cr^{3+}\\)。铬离子(Chromium III)指的是铬失去三个电子后形成的离子，带三个单位正电荷。"
  },
  {
    "question": "What is the ion for Oxide / Apakah ion untuk Oksida?",
    "options": ["\\(O^{-}\\)", "\\(Ox^{2-}\\)", "\\(O_3^{2-}\\)", "\\(O^{2-}\\)"],
    "answer": "\\(O^{2-}\\)",
    "explanation": "正确答案是 \\(O^{2-}\\)。氧(Oxygen)是第十六主族的非金属元素，容易得到两个电子，形成带两个单位负电荷的氧离子。"
  },
  {
    "question": "What is the ion for Fluoride / Apakah ion untuk Florida?",
    "options": ["\\(Fl^{-}\\)", "\\(F^{2-}\\)", "\\(Fo^{-}\\)", "\\(F^{-}\\)"],
    "answer": "\\(F^{-}\\)",
    "explanation": "正确答案是 \\(F^{-}\\)。氟(Fluorine)是第十七主族的卤素元素，容易得到一个电子，形成带一个单位负电荷的氟离子。"
  },
  {
    "question": "What is the ion for Chloride / Apakah ion untuk Klorida?",
    "options": ["\\(Ch^{-}\\)", "\\(Cl^{2-}\\)", "\\(C^{-}\\)", "\\(Cl^{-}\\)"],
    "answer": "\\(Cl^{-}\\)",
    "explanation": "正确答案是 \\(Cl^{-}\\)。氯(Chlorine)是第十七主族的卤素元素，容易得到一个电子，形成带一个单位负电荷的氯离子。"
  },
  {
    "question": "What is the ion for Bromide / Apakah ion untuk Bromida?",
    "options": ["\\(Bo^{-}\\)", "\\(B^{-}\\)", "\\(Br^{2-}\\)", "\\(Br^{-}\\)"],
    "answer": "\\(Br^{-}\\)",
    "explanation": "正确答案是 \\(Br^{-}\\)。溴(Bromine)是第十七主族的卤素元素，容易得到一个电子，形成带一个单位负电荷的溴离子。"
  },
  {
    "question": "What is the ion for Iodide / Apakah ion untuk Iodida?",
    "options": ["\\(Io^{-}\\)", "\\(I^{2-}\\)", "\\(Id^{-}\\)", "\\(I^{-}\\)"],
    "answer": "\\(I^{-}\\)",
    "explanation": "正确答案是 \\(I^{-}\\)。碘(Iodine)是第十七主族的卤素元素，容易得到一个电子，形成带一个单位负电荷的碘离子。"
  },
  {
    "question": "What is the ion for Hydroxide / Apakah ion untuk Hidroksida?",
    "options": ["\\(H^{-}\\)", "\\(OH^{-}\\)", "\\(O^{-}\\)", "\\(Ho^{-}\\)"],
    "answer": "\\(OH^{-}\\)",
    "explanation": "正确答案是 \\(OH^{-}\\)。氢氧根离子(Hydroxide)是由一个氧原子和一个氢原子形成的复合阴离子，带一个单位负电荷。"
  },
  {
    "question": "What is the ion for Sulphate / Apakah ion untuk Sulfat?",
    "options": ["\\(S^{2-}\\)", "\\(Sul^{2-}\\)", "\\(SO_4^{2-}\\)", "\\(SO_3^{2-}\\)"],
    "answer": "\\(SO_4^{2-}\\)",
    "explanation": "正确答案是 \\(SO_4^{2-}\\)。硫酸根离子(Sulphate)是由一个硫原子和四个氧原子形成的复合阴离子，带两个单位负电荷。"
  },
  {
    "question": "What is the ion for Nitrate / Apakah ion for Nitrat?",
    "options": ["\\(N^{-}\\)", "\\(Ni^{-}\\)", "\\(NO_2^{-}\\)", "\\(NO_3^{-}\\)"],
    "answer": "\\(NO_3^{-}\\)",
    "explanation": "正确答案是 \\(NO_3^{-}\\)。硝酸根离子(Nitrate)是由一个氮原子和三个氧原子形成的复合阴离子，带一个单位负电荷。"
  },
  {
    "question": "What is the ion for Carbonate / Apakah ion untuk Karbonat?",
    "options": ["\\(C^{2-}\\)", "\\(Ca^{2-}\\)", "\\(CO_2^{2-}\\)", "\\(CO_3^{2-}\\)"],
    "answer": "\\(CO_3^{2-}\\)",
    "explanation": "正确答案是 \\(CO_3^{2-}\\)。碳酸根离子(Carbonate)是由一个碳原子和三个氧原子形成的复合阴离子，带两个单位负电荷。"
  },
  {
    "question": "What is the ion for Ethanoate / Apakah ion untuk Etanoat?",
    "options": ["\\(Et^{-}\\)", "\\(CH_2COO^{-}\\)", "\\(CH_3COO^{-}\\)", "\\(COOH^{-}\\)"],
    "answer": "\\(CH_3COO^{-}\\)",
    "explanation": "正确答案是 \\(CH_3COO^{-}\\)。乙酸根离子(Ethanoate)也叫醋酸根离子，是乙酸失去一个质子后形成的阴离子。"
  },
  {
    "question": "What is the ion for Manganate(VII) / Apakah ion untuk Manganat (VII)?",
    "options": ["\\(MnO_3^{-}\\)", "\\(Mn^{7-}\\)", "\\(MaO_4^{-}\\)", "\\(MnO_4^{-}\\)"],
    "answer": "\\(MnO_4^{-}\\)",
    "explanation": "正确答案是 \\(MnO_4^{-}\\)。高锰酸根离子(Manganate(VII))中锰的氧化态为+7，整个离子带一个单位负电荷。"
  },
  {
    "question": "What is the ion for Dichromate(VI) / Apakah ion untuk Dikromat (VI)?",
    "options": ["\\(CrO_4^{2-}\\)", "\\(DiCrO_7^{2-}\\)", "\\(Cr_2O_6^{2-}\\)", "\\(Cr_2O_7^{2-}\\)"],
    "answer": "\\(Cr_2O_7^{2-}\\)",
    "explanation": "正确答案是 \\(Cr_2O_7^{2-}\\)。重铬酸根离子(Dichromate(VI))中铬的氧化态为+6，整个离子带两个单位负电荷。"
  },
  {
    "question": "What is the ion for Phosphate / Apakah ion untuk Fosfat?",
    "options": ["\\(P^{3-}\\)", "\\(PhO_4^{3-}\\)", "\\(PO_3^{3-}\\)", "\\(PO_4^{3-}\\)"],
    "answer": "\\(PO_4^{3-}\\)",
    "explanation": "正确答案是 \\(PO_4^{3-}\\)。磷酸根离子(Phosphate)是由一个磷原子和四个氧原子形成的复合阴离子，带三个单位负电荷。"
  },
  {
    "question": "What is the ion for Thiosulphate / Apakah ion for Tiosulfat?",
    "options": ["\\(S O_3^{2-}\\)", "\\(ThO_3^{2-}\\)", "\\(S_2O_4^{2-}\\)", "\\(S_2O_3^{2-}\\)"],
    "answer": "\\(S_2O_3^{2-}\\)",
    "explanation": "正确答案是 \\(S_2O_3^{2-}\\)。硫代硫酸根离子(Thiosulphate)结构上可以看作是硫酸根离子中的一个氧原子被硫原子取代，整个离子带两个单位负电荷。"
  }
];

export const CORRECT_ANSWER_SOUND_B64 = "data:audio/mpeg;base64,YOUR_CORRECT_ANSWER_BASE64_STRING_HERE";
export const WRONG_ANSWER_SOUND_B64 = "data:audio/mpeg;base64,YOUR_WRONG_ANSWER_BASE64_STRING_HERE";


export const getFeedbackMessage = (percentage: number): string => {
  if (percentage >= 90) {
    return "太棒了！你对离子式的掌握非常扎实，继续保持！";
  } else if (percentage >= 70) {
    return "很不错！大部分都答对了，再巩固一下就更完美了！";
  } else if (percentage >= 50) {
    return "继续加油！这次测试是一个很好的学习机会，弄懂错题你就会进步很大！"
  } else {
    return "别灰心，化学学习需要耐心和重复。从错误中学习，下次一定会更好！";
  }
};