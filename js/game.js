let frage = 1;
let money = 0;
let money_amount;
const fragen = { // 15 questions are needed
    "": "", // the key is the question and the value the right answer
}

switch (frage) {
    case 1:
        money_amount = 50;
    case 2:
        money_amount = 100;
    case 3:
        money_amount = 200;
    case 4:
        money_amount = 300;
    case 5:
        money_amount = 500;
    case 6:
        money_amount = 1000;
    case 7:
        money_amount = 2000;
    case 8:
        money_amount = 4000;
    case 9:
        money_amount = 8000;
    case 10:
        money_amount = 16000;
    case 11:
        money_amount = 32000;
    case 12:
        money_amount = 64000;
    case 13:
        money_amount = 125000;
    case 14:
        money_amount = 500000;
    case 15:
        money_amount = 1000000;
}

var header = document.getElementById("heading");
header.innerHTML = "Frage " + frage + ":"

var act_money = document.getElementById("money");
act_money.innerHTML = "Geld: " + money;