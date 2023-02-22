const quizData = [
  {
    question: "1. Which of the following is a server-side Java Script object?",
    a: "Function",
    b: "File",
    c: "FileUpload",
    d: "Date",
    correct: "b",
  },
  {
    question: "2. To insert a JavaScript into an HTML page, which tag is used?",
    a: "< script=â€™javaâ€™>",
    b: "< javascript>",
    c: "< script>",
    d: "< js>",
    correct: "c",
  },
  {
    question:
      "3. Which attribute needs to be changed to make elements invisible?",
    a: "visibilty",
    b: "visible",
    c: "invisibility",
    d: "invisible",
    correct: "a",
  },
];

const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const answerEls = document.querySelectorAll(".q");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const btn = document.getElementById("btn");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  question.innerHTML = currentQuizData.question;
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

btn.addEventListener("click", () => {
  const answer = getSelected();
  console.log(answer);
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    console.log(currentQuiz);
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2> You answered ${score}/${quizData.length} questions correctly </h2>
      <button onclick="location.reload()" class="btn">Reload</button>
      `;
    }
  }
});
