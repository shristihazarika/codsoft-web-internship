const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language"
    ],
    answer: 0
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "CSS", "Python", "Java"],
    answer: 1
  },
  {
    question: "Which is not a programming language?",
    options: ["Java", "Python", "HTML", "C++"],
    answer: 2
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option");
const resultEl = document.getElementById("result");

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;

  optionButtons.forEach((btn, index) => {
    btn.textContent = q.options[index];
  });
}

function selectAnswer(selected) {
  if (selected === quizData[currentQuestion].answer) {
    score++;
  }
  nextQuestion();
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.querySelector(".options").style.display = "none";
  document.getElementById("nextBtn").style.display = "none";
  resultEl.textContent = `Your Score: ${score}/${quizData.length}`;
}

loadQuestion();
