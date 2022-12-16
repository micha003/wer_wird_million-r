// Wer wird Millionär?

const fragen = [
  "Präsident welchen Landes war Nelson Mandela?",
  "Wer bekämpfte sich im Falklandkrieg?",
  "Wo fand 1816 die erste Sitzung des ersten Deutschen Bundestages statt?",
  "Wann begann der Bau der Berliner Mauer?",
  "Was fand NICHT an einem 9.November statt?",
  "Was fand 2004 in der Ukraine statt?",
  "Wer ist der aktuelle (2022) Weltmeister in Schach?",
  "Wer schrieb Faust?",
  "J.R.R. Tolkien schrieb...",
  "In welchem Land gibt es eine Weltmeisterschaft im Luftgitarre spielen?",
  
];
const answers_a = [
  "Südafrika",
  "Deutschland und Frankreich",
  "Bonn",
  "1945",
  "Pogromnacht",
  "Proteste auf dem Majdan",
  "Magnus Carlsen",
  "Friedrich Schiller",
  "Die undendliche Geschichte",
  "Finnland",

];
const answers_b = [
  "Südkorea",
  "Kanada und Irland",
  "München",
  "1961",
  "Fall der Berliner Mauer",
  "Orangene Revolution",
  "Garry Kasparov",
  "Max Frisch",
  "Hänsel und Gretel",
  "Norwegen",

];
const answers_c = [
  "Argentinien",
  "Süd- und Nordkorea",
  "Frankfurt am Main",
  "1968",
  "Bedingungslose Kapitulation des 'Dritten Reichs'",
  "Nelkenrevolution",
  "Bobby Fischer",
  "Virginia Woolf",
  "Der Herr der Ringe",
  "Schweden",

];
const answers_d = [
  "Spanien",
  "Argentinien und Großbritannien",
  "Berlin",
  "1938",
  "'Hitlerputsch' in München",
  "UEFA Fußball-EM",
  "Vladimir Kramnik",
  "Johann Wolfgang von Goethe",
  "Alice im Wunderland",
  "Dänemark",

];
let right_answer;

let frage = 1;
let money = 0;
let money_amount = 0;
let index = frage - 1;

const money_displayed = document.getElementById("money");
const display_question = document.getElementById("asked_question");
const question_num = document.getElementById("heading");
const answer_a = document.getElementById("answer_a");
const answer_b = document.getElementById("answer_b");
const answer_c = document.getElementById("answer_c");
const answer_d = document.getElementById("answer_d");

function game_start() {
  // reset the Variables is the main function of this function
  frage = 1;
  money = 0;
  money_amount = 0;
  index = frage - 1;
}

function display() {
  money_displayed.innerHTML = `gewonnenes Geld: ${money}€`;
  display_question.innerHTML = fragen[index];
  question_num.innerHTML = `Frage ${frage}:`;
/* TODO: display the possible answers */
}

function check_answer(givenAnswer) {
  switch (frage) {
    case 1:
      right_answer = 'a';
      money_amount = 50;
      break;
    case 2:
      right_answer = 'd';
      money_amount = 100;
      break;
    case 3:
      right_answer = 'c';
      money_amount = 200;
      break;
    case 4:
      right_answer = 'b';
      money_amount = 300;
      break;
    case 5:
      right_answer = 'c';
      money_amount = 500;
      break;
    case 6:
      right_answer = 'b';
      money_amount = 1000;
      break;
    case 7:
      right_answer = 'a';
      money_amount = 2000;
      break;
    case 8:
      right_answer = 'd';
      money_amount = 4000;
      break;
    case 9:
      right_answer = 'c';
      money_amount = 8000;
      break;
    case 10:
      right_answer = 'a';
      money_amount = 16000;
      break;
    case 11:
      right_answer = 'b';
      money_amount = 32000;
      break;
    case 12:
      right_answer = 'd';
      money_amount = 64000;
      break;
    case 13:
      right_answer = 'c';
      money_amount = 125000;
      break;
    case 14:
      right_answer = 'b';
      money_amount = 500000;
      break;
    case 15:
      right_answer = 'a';
      money_amount = 1000000;
      break;
    default:
      return null; /* to check the value of the function,if the game over */
  }

  if (givenAnswer == right_answer) {
    alert("Richtig!");
    return true;
  } else {
    alert("Leider falsch!");
    return false;
  }
}


function update_game() {
  switch (check_answer) {
    case true:
      money += money_amount;
      frage++
      break;
    case false:
      frage++
      break;
    case null:
      // define the end of the game | link to gameover.html
      break;
  }
}

