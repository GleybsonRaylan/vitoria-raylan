export interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    isCorrect: boolean;
  }[];
  correctFeedback: string;
  wrongFeedback: string;
  allCorrect?: boolean;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "👉 O que me deixa feliz rapidamente?",
    options: [
      { text: "Te abraçar", isCorrect: true },
      { text: "Um aperto de mão", isCorrect: false },
      { text: "Ganhar na mega-sena", isCorrect: false },
      { text: "Programação", isCorrect: false },
    ],
    correctFeedback: "Um abraço seu conserta qualquer bug da minha vida. 💖",
    wrongFeedback: "Nem todo bug se resolve com código não… 😂",
  },
  {
    id: 2,
    question: "👉 Qual comida eu nunca enjoo?",
    options: [
      { text: "Açaí", isCorrect: false },
      { text: "Pizza", isCorrect: false },
      { text: "Lasanha", isCorrect: true },
      { text: "Bolo recheado", isCorrect: false },
    ],
    correctFeedback: "Isso mesmo! 🍝 Lasanha e você são meus pontos fracos.",
    wrongFeedback: "Hmm… essa resposta deu erro 404 😅",
  },
  {
    id: 3,
    question: "👉 O que eu mais gosto quando estou com você?",
    options: [
      { text: "Te ver sorrindo", isCorrect: true },
      { text: "Te abraçar", isCorrect: true },
      { text: "Te beijar", isCorrect: true },
      { text: "Te dar carinho", isCorrect: true },
    ],
    correctFeedback: "Impossível errar 💕 Com você, tudo é certo.",
    wrongFeedback: "Impossível errar 💕 Com você, tudo é certo.",
    allCorrect: true,
  },
  {
    id: 4,
    question: "👉 Eu sou mais razão ou emoção?",
    options: [
      { text: "Razão", isCorrect: false },
      { text: "Emoção", isCorrect: true },
    ],
    correctFeedback: "Acertou! Sou mais coração do que código. 💝",
    wrongFeedback: "Errou! Por dentro sou pura emoção! 😄",
  },
  {
    id: 5,
    question: "👉 Eu sou mais paciente ou impulsivo?",
    options: [
      { text: "Paciente", isCorrect: true },
      { text: "Impulsivo", isCorrect: false },
    ],
    correctFeedback: "Isso! A paciência é minha melhor feature. 😊",
    wrongFeedback: "Na verdade sou bem paciente sim! 🤗",
  },
  {
    id: 6,
    question: "👉 Eu penso demais antes de tomar decisões?",
    options: [
      { text: "Sim", isCorrect: true },
      { text: "Não", isCorrect: false },
    ],
    correctFeedback: "Você me conhece! Penso mil vezes antes de agir. 🤔",
    wrongFeedback: "Erro de lógica! Sou bem pensativo sim! 😅",
  },
  {
    id: 7,
    question: "👉 Eu me estresso fácil, mas passa rápido?",
    options: [
      { text: "Sim", isCorrect: true },
      { text: "Não", isCorrect: false },
    ],
    correctFeedback: "Exato! Estresso rápido mas também desestresso. 😤➡️😊",
    wrongFeedback: "É verdade sim! Sou intenso mas passa rápido! 😂",
  },
  {
    id: 8,
    question: "👉 Eu fico mais engraçado quando estou nervoso?",
    options: [
      { text: "Sim", isCorrect: false },
      { text: "Não", isCorrect: true },
    ],
    correctFeedback: "Isso! Quando nervoso fico é sério demais. 😅",
    wrongFeedback: "Na verdade nervoso eu fico mais sério! 🤨",
  },
  {
    id: 9,
    question: "👉 Eu me apego a detalhes pequenos?",
    options: [
      { text: "Sim", isCorrect: true },
      { text: "Não", isCorrect: false },
    ],
    correctFeedback: "Perfeitamente! Cada pixel importa pra mim! 🎯💕",
    wrongFeedback: "Errou! Sou super detalhista, olha esse quiz! 😄",
  },
  {
    id: 10,
    question: "👉 Eu sinto tudo muito intenso?",
    options: [
      { text: "Sim", isCorrect: true },
      { text: "Não", isCorrect: false },
    ],
    correctFeedback: "Isso! Sou intenso em tudo, principalmente no amor! 💕🔥",
    wrongFeedback: "ERROU 😤 Sou muito intenso sim, inclusive agora!",
  },
  {
    id: 11,
    question: "👉 Eu rio em momentos inapropriados?",
    options: [
      { text: "Sim", isCorrect: true },
      { text: "Não", isCorrect: false },
    ],
    correctFeedback: "Acertou! Às vezes é nervoso, às vezes é zoeira mesmo 😂💖",
    wrongFeedback: "ERROU 😤 Isso foi um bug grave! Rio em qualquer hora!",
  },
];
