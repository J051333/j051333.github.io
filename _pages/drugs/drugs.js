const drugsCounter = document.getElementById("drugs_counter");
const cooksCounter = document.getElementById("cooks_counter");
const moneyCounter = document.getElementById("money_counter");
const chemsCounter = document.getElementById("chems_counter");

const items = {
  cooks: 0,
  runners: 0,
};

const costs = {
  cook: 25, // $
  runner: 100, // $
  chemicals: 15, // $
  drugs: 15, // chems
};

const worths = {
  drugs: 0.5, // $
  chemOrder: 1500, // chems to give
};

var drugs = 0;
var chemicals = 100;
var money = 0;

document.getElementById("manual_cook").onclick = () => {
  drugs += 1;

  drugsCounter.textContent = "Drugs: " + drugs;
};

document.getElementById("buy_cooks").onclick = () => {
  if (money >= costs.cook) {
    cooks += 1;
    money -= costs.cook;
  }

  cooksCounter.textContent = "Cooks: " + drugs;
};

function cook(_v = 1) {
  if (chemicals >= costs.drugs * _v) {
    drugs += _v;
    chemicals -= costs.drugs * _v;
  }
}

function sell() {
  money += worths.drugs * drugs;
  drugs = 0;

  moneyCounter.textContent = "Money: " + money;
  drugsCounter.textContent = "Drugs: " + drugs;
}

setInterval(() => {
  sell();
}, 1000);
