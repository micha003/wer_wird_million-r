let frage = 1;
let money = 0;
let money_amount;

let false_answer_c = 0;
let tmfa = true; // too many false answers

let A, B, C, D; // possible answers
let right_answer = String();

let display_question = document.getElementById("asked_question");
const fragen = [
  "Was ist die Hauptstadt von Deutschland?",
  "Wer war der erste US-Präsident?",
  "Welches chemische Element ist am meisten vorhanden in der Luft?",
  "Wie heißt der höchste deutsche politische Posten?",
  "Wie hieß der erste deutsche Bundeskanzler?",
  "Wie nennt man die Bauart der Häuser im Mittelalter in Mitteleuropa?",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];

function game(chosen_answer) {
  let index = frage - 1;
  switch (frage) {
    case 1:
      money_amount = 50;
      display_question.innerHTML = fragen[index];
      A = "Berin";
      B = "Bonn";
      C = "Hamburg";
      D = "Hannover";
      right_answer = "a";
    case 2:
      money_amount = 100;
      display_question.innerHTML = fragen[index];
      A = "Abraham Lincoln";
      B = "Richard Nixon";
      C = "George Washington";
      D = "John Fitzgerald Kennedy";
      right_answer = "c";
    case 3:
      money_amount = 200;
      display_question.innerHTML = fragen[index];
      A = "Sauerstoff";
      B = "Stickstoff";
      C = "Kohlenstoffdioxid";
      D = "Wassestoff";
      right_answer = "b";
    case 4:
      money_amount = 300;
      display_question.innerHTML = fragen[index];
      A = "Bundesratsvorsitzender";
      B = "Bundeskanzler";
      C = "Bundestagspräsident";
      D = "Bundespräsident";
      right_answer = "d";
    case 5:
      money_amount = 500;
      display_question.innerHTML = fragen[index];
      A = "Willy Brandt";
      B = "Konrad Adenauer";
      C = "Helmut Kohl";
      D = "Gerhard Schröder";
      right_answer = "b";
    case 6:
      money_amount = 1000;
      display_question.innerHTML = fragen[index];
      A = "Fachwerk";
      B = "Holzhbauten";
      C = "Bauernhaus";
      D = "Stroh-Holz-Haus";
      right_answer = "a";
    case 7:
      money_amount = 2000;
      display_question.innerHTML = fragen[index];
    case 8:
      money_amount = 4000;
      display_question.innerHTML = fragen[index];
    case 9:
      money_amount = 8000;
      display_question.innerHTML = fragen[index];
    case 10:
      money_amount = 16000;
      display_question.innerHTML = fragen[index];
    case 11:
      money_amount = 32000;
      display_question.innerHTML = fragen[index];
    case 12:
      money_amount = 64000;
      display_question.innerHTML = fragen[index];
    case 13:
      money_amount = 125000;
      display_question.innerHTML = fragen[index];
    case 14:
      money_amount = 500000;
      display_question.innerHTML = fragen[index];
    case 15:
      money_amount = 1000000;
      display_question.innerHTML = fragen[index];
    default:
      // add here the end of the game with printout the money and so on
      if (tmfa) {
        // print here out, when you had to many tries to do sth right
      }

      break;
  }

  const header = document.getElementById("heading");
  header.innerHTML = "Frage " + frage + ":";

  const current_money = document.getElementById("money");
  current_money.innerHTML = "gewonnenes Geld: " + money;

  //sets the possible answers
  const answer_a = document.getElementById("answer_a");
  answer_a.innerHTML = `A: ${A}`;

  const answer_b = document.getElementById("answer_b");
  answer_b.innerHTML = `B: ${B}`;

  const answer_c = document.getElementById("answer_c");
  answer_c.innerHTML = `C: ${C}`;

  const answer_d = document.getElementById("answer_d");
  answer_d.innerHTML = `D: ${D}`;
  if (chosen_answer == right_answer) {
    alert("Richtig!");
    money = money + money_amount;
    frage++;
  } else {
    false_answer_c++;
    alert(
      `Leider Falsch, die richtige Antwort war ${right_answer.toLocaleUpperCase()}. 
        Sie haben noch ${3 - false_answer_c} Versuche übrig.`
    );

    if (false_answer_c == 3) {
      alert(`Gewonnenes Geld: ${money}`);
      location.replace("gameover.html");
    } else {
    }

    frage++;
  }
}
