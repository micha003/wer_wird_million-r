// Wer wird Millionär?

const fragen = [""];
const answers_a = [];
const answers_b = [];
const answers_c = [];
const answers_d = [];

const money_displayed = document.getElementById("money");
const display_question = document.getElementById("asked_question");
const question_num = document.getElementById("heading");
const answer_a = document.getElementById("answer_a");
const answer_b = document.getElementById("answer_b");
const answer_c = document.getElementById("answer_c");
const answer_d = document.getElementById("answer_d");

function game_start() {
  // reset the Variables is the main function of this function
  let frage = 1;
  let money = 0;
  let money_amount = 0;
  let index = frage - 1;
}

function display() {
  money_displayed.innerHTML = `gewonnenes Geld: ${money}€`;
  display_question.innerHTML = fragen[index];
  question_num.innerHTML = `Frage ${frage}:`;
}

function check_answer(givenAnswer) {
  switch (frage) {
    case 1:
      break;

    default:
      break;
  }
}
