let player = {
    name: "Alexander",
    chips: 200
}

let sum = 0;

let cardsArr = [];

let message = "";

let isAlive = false;

let hasBlackJack = false;

let messageEl = document.getElementById("message-el");

let cardsEl = document.getElementById("cards-el");

let sumEl = document.getElementById("sum-el");

let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard ();
    let secondCard = getRandomCard ();
    sum = firstCard + secondCard;
    cardsArr = [ firstCard, secondCard];
    renderGame()
}

function getRandomCard () {
    let randomNumber = Math.floor ( Math.random() *13) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}

function renderGame () {
    if (sum < 21) {
        message = `Do you want to draw a new card?`;
    } else if (sum === 21) {
        message = `You've got blackjack`;
        hasBlackJack = true;
    } else {
        message = `You're out of the game`;
        isAlive = false;
    }
    messageEl.textContent = message;
    cardsEl.textContent = "Cards: ";
    for( let i = 0; i < cardsArr.length; i++) {
        cardsEl.textContent += cardsArr[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
}

function newCard () {
    if (isAlive === true && hasBlackJack === false) {
        let newCard = getRandomCard ();
        sum += newCard;
        cardsArr.push(newCard);
        renderGame()
    }
}
