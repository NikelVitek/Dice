const betterDice = document.getElementById('betterDice');
const throwingMachine = document.getElementById('throwingMachine');
const throwingCup = document.getElementById('throwingCup');
const upgrages = document.getElementById('upgrages');



let thrw = 0; 
let multi = 1;
let coinsA = 0;
let bDPrice = 50;
let bDiceAmount = 0;
let tMPrice = 100;
let CPS = 0;
let tMAmount = 0;
let tCPrice = 1250;
let tCAmount = 0;
let difficulty = 1.8;
let prestigeCoins = 999000000;
function numGen() {
    thrw = Math.ceil(Math.random() * 6);
    document.getElementById('dicepic').src = `img/dice${thrw}.png`;
}

document.getElementById('play').addEventListener('click', function() {
    numGen();
    coinsA = coinsA + (thrw * multi);
})

setInterval(addValue,100)

function addValue(){
    document.getElementById('multiplier').innerHTML = `Multiplier: ${multi.toFixed(2)}x`
    betterDice.innerHTML = `Better dice ${bDPrice.toFixed(0)} Coins`
    throwingMachine.innerHTML = `Throwing machine ${tMPrice.toFixed(0)} Coins`
    throwingCup.innerHTML = `Throwing cup ${tCPrice.toFixed(0)} Coins`
    if (coinsA < 1000000){
        document.getElementById('coins').innerHTML = `You have ${coinsA.toFixed(0)} coins`;
    }
    else if (coinsA >= 1000000){
        document.getElementById('coins').innerHTML = `You have ${(coinsA/1000000).toFixed(2)} Million coins`;
    }
    
    document.getElementById('dice').innerHTML = `+${thrw*multi}`;
    document.getElementById('CPStext').innerHTML = `${CPS * multi} CPS`;
    document.getElementById('bDAmount').innerHTML = `Better dice will add 0.25x to multiplier</br>You have ${bDiceAmount}`;
    document.getElementById('tMAmount').innerHTML = `Throwing machine adds 3 CPS</br>You have ${tMAmount}`;
    document.getElementById('tCAmount').innerHTML = `Throwing cup adds 20 CPS </br>You have ${tCAmount}`
}

setInterval(function() {
    coinsA += CPS * multi;
},1000)

betterDice.addEventListener('click', function() {
    if (coinsA >= bDPrice){
        multi += 0.25;
        coinsA -= bDPrice;
        bDPrice *= difficulty;
        bDiceAmount ++;
    }
})

throwingMachine.addEventListener('click', function() {
    if (coinsA >= tMPrice){
        CPS += 3;
        coinsA -= tMPrice;
        tMPrice *= difficulty;
        tMAmount++;
    }
})

throwingCup.addEventListener('click', function() {
    if (coinsA >= tCPrice){
        CPS += 20;
        coinsA -= tCPrice;
        tCPrice *= difficulty;
        tCAmount++;
    }
})

document.getElementById('pButton').addEventListener('click', function() {
    if (coinsA >= prestigeCoins){
        multi = 2;
        coinsA = 0;
        bDPrice = 50;
        bDiceAmount = 0;
        tMPrice = 100;
        CPS = 0;
        tMAmount = 0;
        tCPrice = 1250;
        tCAmount = 0;
        difficulty -= 0.1;
        prestigeCoins *= 100;
    }
})