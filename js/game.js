const betterDice = document.getElementById('betterDice');
const throwingMachine = document.getElementById('throwingMachine');
const throwingCup = document.getElementById('throwingCup');
const betterDice2 = document.getElementById('betterDice2');
const throwingMachine2 = document.getElementById('throwingMachine2');
const throwingCup2 = document.getElementById('throwingCup2');
const betterDice3 = document.getElementById('betterDice3');
const throwingMachine3 = document.getElementById('throwingMachine3');
const throwingCup3 = document.getElementById('throwingCup3');



let thrw = 0;
let multi = 1;
let coins = 0;
let CPS = 0;
let difficulty = 1.6;
let prestigeCoins = 999000000;
let bDPrice = 200;
let bDAmount = 0;
let tMPrice = 100;
let tMAmount = 0;
let tCPrice = 1250;
let tCAmount = 0;
let bD2Price = 2000;
let bD2Amount = 0;
let tM2Price = 1000;
let tM2Amount = 0;
let tC2Price = 12500;
let tC2Amount = 0;
let bD3Price = 200000;
let bD3Amount = 0;
let tM3Price = 100000;
let tM3Amount = 0;
let tC3Price = 1250000;
let tC3Amount = 0;

function numGen() {
    thrw = Math.ceil(Math.random() * 6);
    document.getElementById('dicepic').src = `img/dice${thrw}.png`;
}

document.getElementById('play').addEventListener('click', function () {
    numGen();
    coins += (thrw * multi);
})

setInterval(addValue, 100)

function addValue() {
    document.getElementById('dice').innerHTML = `+${thrw * multi}`;
    if (coins < 1000000) {
        document.getElementById('coins').innerHTML = `You have ${coins.toFixed(0)} coins`;
    }
    else if (coins >= 1000000) {
        document.getElementById('coins').innerHTML = `You have ${(coins / 1000000).toFixed(2)} Million coins`;
    }
    document.getElementById('multiplier').innerHTML = `Multiplier: ${multi.toFixed(2)}x`
    document.getElementById('CPStext').innerHTML = `${CPS * multi} CPS`;
    betterDice.innerHTML = `Better dice (${bDPrice.toFixed(0)} Coins)`;
    throwingMachine.innerHTML = `Throwing machine (${tMPrice.toFixed(0)} Coins)`;
    throwingCup.innerHTML = `Throwing cup (${tCPrice.toFixed(0)} Coins)`;
    document.getElementById('bDAmount').innerHTML = `Better dice will add 0.25x to multiplier</br>You have ${bDAmount}`;
    document.getElementById('tMAmount').innerHTML = `Throwing machine adds 3 CPS</br>You have ${tMAmount}`;
    document.getElementById('tCAmount').innerHTML = `Throwing cup adds 10 CPS </br>You have ${tCAmount}`;
    betterDice2.innerHTML = `Better dice TIER 2 (${bD2Price.toFixed(0)} Coins)`;
    throwingMachine2.innerHTML = `Throwing machine TIER 2 (${tM2Price.toFixed(0)} Coins)`;
    throwingCup2.innerHTML = `Throwing cup TIER 2 (${tC2Price.toFixed(0)} Coins)`;
    document.getElementById('bDAmount2').innerHTML = `Better dice TIER 2 will add 1x to multiplier</br>You have ${bD2Amount}`;
    document.getElementById('tMAmount2').innerHTML = `Throwing machine TIER 2 adds 30 CPS</br>You have ${tM2Amount}`;
    document.getElementById('tCAmount2').innerHTML = `Throwing cup TIER 2 adds 100 CPS </br>You have ${tC2Amount}`;
    betterDice3.innerHTML = `Better dice TIER 3 (${bD3Price.toFixed(0)} Coins)`;
    throwingMachine3.innerHTML = `Throwing machine TIER 3 (${tM3Price.toFixed(0)} Coins)`;
    throwingCup3.innerHTML = `Throwing cup TIER 3 (${tC3Price.toFixed(0)} Coins)`;
    document.getElementById('bDAmount3').innerHTML = `Better dice TIER 3 will add 2.5x to multiplier</br>You have ${bD3Amount}`;
    document.getElementById('tMAmount3').innerHTML = `Throwing machine TIER 3 adds 300 CPS</br>You have ${tM3Amount}`;
    document.getElementById('tCAmount3').innerHTML = `Throwing cup TIER 3 adds 1000 CPS </br>You have ${tC3Amount}`;
}

setInterval(function () {
    coins += CPS * multi;
}, 1000)


function error() {
    Swal.fire({
        icon: 'error',
        text: `You don't have enough coins`,
    })
}

betterDice.addEventListener('click', function () {
    if (coins >= bDPrice) {
        multi += 0.25;
        coins -= bDPrice;
        bDPrice *= difficulty;
        bDAmount++;
    }
    else {
        error();
    }
})

throwingMachine.addEventListener('click', function () {
    if (coins >= tMPrice) {
        CPS += 3;
        coins -= tMPrice;
        tMPrice *= difficulty;
        tMAmount++;
    }
    else {
        error();
    }
})

throwingCup.addEventListener('click', function () {
    if (coins >= tCPrice) {
        CPS += 10;
        coins -= tCPrice;
        tCPrice *= difficulty;
        tCAmount++;
    }
    else {
        error();
    }
})

betterDice2.addEventListener('click', function () {
    if (coins >= bD2Price) {
        multi += 1;
        coins -= bD2Price;
        bD2Price *= difficulty;
        bD2Amount++;
    }
    else {
        error();
    }
})

throwingMachine2.addEventListener('click', function () {
    if (coins >= tM2Price) {
        CPS += 30;
        coins -= tM2Price;
        tM2Price *= difficulty;
        tM2Amount++;
    }
    else {
        error();
    }
})

throwingCup2.addEventListener('click', function () {
    if (coins >= tC2Price) {
        CPS += 100;
        coins -= tC2Price;
        tC2Price *= difficulty;
        tC2Amount++;
    }
    else {
        error();
    }
})

betterDice3.addEventListener('click', function () {
    if (coins >= bD3Price) {
        multi += 2.5;
        coins -= bD3Price;
        bD3Price *= difficulty;
        bD3Amount++;
    }
    else {
        error();
    }
})

throwingMachine3.addEventListener('click', function () {
    if (coins >= tM3Price) {
        CPS += 300;
        coins -= tM3Price;
        tM3Price *= difficulty;
        tM3Amount++;
    }
    else {
        error();
    }
})

throwingCup3.addEventListener('click', function () {
    if (coins >= tC3Price) {
        CPS += 1000;
        coins -= tC3Price;
        tC3Price *= difficulty;
        tC3Amount++;
    }
    else {
        error();
    }
})

document.getElementById('pButton').addEventListener('click', function () {
    if (coins >= prestigeCoins) {
        multi = 2;
        coins = 0;
        difficulty -= 0.1;
        prestigeCoins *= 1000;
        CPS = 0;
        bDPrice = 50;
        bDAmount = 0;
        tMPrice = 100;
        tMAmount = 0;
        tCPrice = 1250;
        tCAmount = 0;
        bD2Price = 20000;
        bD2Amount = 0;
        tM2Price = 10000;
        tM2Amount = 0;
        tC2Price = 125000;
        tC2Amount = 0;
        bD3Price = 2000000;
        bD3Amount = 0;
        tM3Price = 1000000;
        tM3Amount = 0;
        tC3Price = 12500000;
        tC3Amount = 0;
    }
    else {
        error();
    }
})

document.onkeydown = function (e) {
    return false;
}