const drugsCounter = document.getElementById("drugs_counter");
const cooksCounter = document.getElementById("cooks_counter");
const moneyCounter = document.getElementById("money_counter");
const chemsCounter = document.getElementById("chems_counter");

const manualCookButton = document.getElementById("manual_cook");
const manualSellButton = document.getElementById("manual_sell");
const buyCooksButton = document.getElementById("buy_cooks");
const buyRunnersButton = document.getElementById("buy_runners");
const buyChemsButton = document.getElementById("buy_chems");

const items = {
  cooks: 0,
  runners: 0,
};

const costs = {
  cooks: 25, // $
  runners: 100, // $
  chemicals: 150, // $
  drugs: 3, // chems
};

const worths = {
  drugs: 0.5, // $
  chemOrder: 1500, // chems to give
};

const dps = {
  cooks: 1,
};

var drugs = 0;
var chemicals = 250;
var money = 0;
var lastTime = Date.now();

manualCookButton.onclick = () => cook(1);

manualSellButton.onclick = () => sell(1);

buyCooksButton.onclick = () => {
  if (money >= costs.cooks) {
    items.cooks += 1;
    money -= costs.cooks;
    costs.cooks *= 1.5;
  }
};

buyRunnersButton.onclick = () => {
  if (money >= costs.runners) {
    items.runners += 1;
    money -= costs.runners;
    costs.runners *= 1.5;
  }
};

buyChemsButton.onclick = () => {
  if (money >= costs.chemicals) {
    chemicals += worths.chemOrder;
    money -= costs.chemicals;
  }
};

function cook(_v = 1) {
  if (chemicals >= costs.drugs * _v) {
    drugs += _v;
    chemicals -= costs.drugs * _v;
  }
}

function sell(sellMode = 0) {
  if (sellMode == 0) {
    let sellAmt = items.runners * 25;

    money += worths.drugs * sellAmt;
    drugs -= sellAmt;
  } else if (sellMode == 1) {
    let sellAmt = drugs >= 25 ? 25 : drugs;

    money += worths.drugs * sellAmt;
    drugs -= sellAmt;
  }
}

function test() {
  drugs = 100000;
}

function update(dt) {
  buyCooksButton.textContent = `Buy a Cook (${Math.ceil(costs.cooks)})`;
  buyRunnersButton.textContent = `Buy a Runner (${Math.ceil(costs.runners)})`;
  moneyCounter.textContent = "Money: " + Math.ceil(money);
  drugsCounter.textContent = "Drugs: " + Math.ceil(drugs);
  chemsCounter.textContent = "Chemicals: " + Math.ceil(chemicals);
  buyChemsButton.textContent = `Buy some Chemicals (${Math.ceil(costs.chemicals)})`;

  cook(items.cooks * dps.cooks * dt);
}

setInterval(() => {
  sell();
}, 1000);

setInterval(() => {
  costs.chemicals = Math.ceil(Math.random() * 15 + 10);
}, 8000);

setInterval(() => {
  var dt = 1000 / (Date.now() - lastTime);
  
  update(dt);
}, 35);
