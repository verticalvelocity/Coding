//for (let count = 10; count < 101; count +=10) {
//    console.log(count);
//}
//
//let messages = [
//    "Hey, how's it going?",        
//    "I'm great, thank you! How about you?",
//    "All good. Been working on my portfolio lately.",
//    "Same here!",
//    "Go Smurf!"
//]
//
//for (let i = 0; i < messages.length; i++) {
//    console.log(messages[i]);
//    
//}
//
//let cards = [7, 3, 9]
//
//// Create a for loop that logs out all the cards in the array
//// Use cards.length to specify how long the loop should run
//
//
//for (let i = 0; i < cards.length; i++) {
//    console.log(cards[i]);
//    
//}

let sentence = ["Hello ", "my ", "name ", "is ", "Per"] 
let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent

for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent = (sentence[i]);
    
}