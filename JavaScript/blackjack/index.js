// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11
// 2. Create a variable, sum, and set it to the sum of the two cards

//Kort från kungen

//let gammal = 20
//
//if (gammal < 100){
//    console.log("Väx till dig!")
//} else if (gammal === 100) {
//    console.log("Grattis!")
//} else {
//    console.log("Girige jävul!")
//}
//
//
////Age question
//let age = 21;
//let oldenough = false;
//
//if (age < 21) {
//    console.log("You ain't got the age!"); 
//} else {
//    console.log("Welcome to the pleasuredome!");
//    oldenough = true;
//};


let firstCard = 1;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasblack = false;
let isAlice = true;
let message = " ";
let messageEl = document.getElementById("message-el");
//Alt. sätt för att välja element är querySelector
let sumEL = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

function startGame(){
    renderGame()
};

function renderGame(){
 //  document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
    sumEL.textContent = `Sum: ${sum}`;
    cardsEl.textContent = "Första kortet: " + firstCard + "  Andra kortet: " + secondCard;

   if (sum <= 20){
       message = "Vill du dra ett till kort?";
   } else if (sum === 21){
       message = "Wohoom, du har Black Jack!";
       hasblack = true;
   } else {
       message = "Du är tjock";
       isAlice = false;
   }
   messageEl.textContent = message;
};

function newCard(){
    let thirdCard = 4;
    sum = sum + thirdCard;    
    startGame()
};

//console.log(hasblack);
//console.log(isAlice);





// Write the conditional according to these rules:

// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭"




