let snd = new Audio("./sound.wav");

let sum = 0;
let cards = [];

let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")

let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el")


function startGame(){
    if(cards.length !== 0){
        return
    }

    let firstCard = getRandomCard();
    let secondCard = getRandomCard();

    cards.push(firstCard, secondCard)
    isAlive = true;

    if(cards.length === 2){
        renderGame()
    }
    
}

function renderGame(){
    sum = cards.reduce((sum, card) => sum += card)
    cardsEl.textContent = "Cards: " + cards.map(card => " " + card)
    sumEl.textContent = `Sum: ${sum}`
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    }
    else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true; 
        resetGame()
    }
    else {
        message = "You Lost!";
        isAlive = false;
        resetGame()
    }
    messageEl.textContent = message;
}

function getRandomCard() {
    let value = Math.floor(Math.random() * 13) + 1;
    if (value === 1) {
        return 11;
    }
    if (value > 10) {
        return 10;
    }
    return value;
}

function newCard(){
    
    if(isAlive === true && hasBlackJack === false){
       let card = getRandomCard();
        cards.push(card);
        renderGame()
    }
   
}

function resetGame(){
    sum = 0;
    cards = [];
    // sumEl.textContent = `Sum: `
    // cardsEl.textContent = `Cards: `
    // messageEl.textContent = "Want to play a round?";
  
}
