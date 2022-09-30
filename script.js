const quizData = [
  {
    question:
      "Which built-in method calls a function for each element in the array?",
    a: "while()",
    b: "loop()",
    c: "forEach()",
    d: "None of the above",
    correct: "c",
  },
  {
    question:
      "Which built-in method reverses the order of the elements of an array?",
    a: "changeOrder(order)",
    b: "reverse()",
    c: "sort(order)",
    d: "None of the above",
    correct: "b",
  },
  {
    question:
      "Which of the following is a valid type of function javascript supports?",
    a: "named function",
    b: "anonymous function",
    c: "Both the above",
    d: "None of the above",
    correct: "c",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers()
  let currentData = quizData[currentQuiz];
  questionEl.textContent = currentData.question;
  a_text.textContent = currentData.a;
  b_text.textContent = currentData.b;
  c_text.textContent = currentData.c;
  d_text.textContent = currentData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}


function getSelected() {
  let selectedOption;
  answerEls.forEach((answer) => {
    if (answer.checked) {
      selectedOption = answer.id;
    }
  });
  return selectedOption;
}


submitBtn.addEventListener("click", () => {
  let checkAnswer = getSelected();

    if(checkAnswer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++
    if(currentQuiz < quizData.length) {
      loadQuiz()
    } else {
      quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button> `;
    }

});


