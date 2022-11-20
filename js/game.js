let frage = 1;
let money = 0;
let money_amount;

const header = document.getElementById("heading");
header.innerHTML = "Frage " + frage + ":"

const current_money = document.getElementById("money");
current_money.innerHTML = "gewonnenes Geld: " + money;

let A, B, C, D; // possible answers
let right_answer;

let display_question = document.getElementById("asked_question");
const fragen = [ // TODO: replace the ae, oe, ue and ss with the right letters
    "Was ist die Hauptstadt von Deutschland?",
	"Wer war der erste US-Praesident?",
	"Welches chemische Element ist am meisten vorhanden in der Luft?",
	"Wie heisst der hoechste deutsche politische Posten?",
    "Wie hiess der erste deutsche Bundeskanzler?",
    "Wie nennt man die Bauart der Haeuser im Mittelalter in Mitteleuropa?",
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
]

// This is the switch statement, for the money amount, how much you get for a right answer
switch (frage) {
    case 1:
        money_amount = 50;
        display_question.innerHTML = fragen[frage - 1];
        A = "Berin";
        B = "Bonn";
        C = "Hamburg";
        D = "Hannover";
        right_answer = 'a';
    case 2:
        money_amount = 100;
        display_question.innerHTML = fragen[frage - 1];
        A = "Abraham Lincoln";
        B = "Richard Nixon";
        C = "George Washington";
        D = "John Fitzgerald Kennedy";
        right_answer = 'c';
    case 3:
        money_amount = 200;
        display_question.innerHTML = fragen[frage - 1];
        A = "Sauerstoff";
        B = "Stickstoff";
        C = "Kohlenstoffdioxid";
        D = "Wassestoff";
        right_answer = 'b';
    case 4:
        money_amount = 300;
        display_question.innerHTML = fragen[frage - 1];
        A = "Bundesratsvorsitzender";
        B = "Bundeskanzler";
        C = "Bundestagspraesident";
        D = "Bundespraesident";
        right_answer = 'd';
    case 5:
        money_amount = 500;
        display_question.innerHTML = fragen[frage - 1];
        A = "Willy Brandt";
        B = "Konrad Adenauer";
        C = "Helmut Kohl";
        D = "Gerhard Schroeder";
        right_answer = 'b';
    case 6:
        money_amount = 1000;
        display_question.innerHTML = fragen[frage - 1];
        A = "Fachwerk";
        B = "Holzhbauten";
        C = "Bauernhaus";
        D = "Stroh-Holz-Haus";
        right_answer = 'a';
    case 7:
        money_amount = 2000;
        display_question.innerHTML = fragen[frage - 1];
    case 8:
        money_amount = 4000;
        display_question = fragen[frage - 1];
    case 9:
        money_amount = 8000;
        display_question.innerHTML = fragen[frage - 1];
    case 10:
        money_amount = 16000;
        display_question.innerHTML = fragen[frage - 1];
    case 11:
        money_amount = 32000;
        display_question.innerHTML = fragen[frage - 1];
    case 12:
        money_amount = 64000;
        display_question.innerHTML = fragen[frage - 1];
    case 13:
        money_amount = 125000;
        display_question.innerHTML = fragen[frage - 1];
    case 14:
        money_amount = 500000;
        display_question.innerHTML = fragen[frage - 1];
    case 15:
        money_amount = 1000000;
        display_question.innerHTML = fragen[frage - 1];
}
