// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country
/*
let person = {
    name: "David",
    age: 50,
    country: "Sweden"
};

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

function logdata () {
    console.log(person.name + " is " + person.age + " old and lives in " + person.country);
};
// Call the logData() function to verify that it works

logdata();
*/
// -----------------------------------------------------------------------------

//IF/ELSE

//let age = 67

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable
/*
if ( age < 6 ) {
console.log("Billigt");    
} else if ( age == 6 || age < 17) {
console.log("Child discount");
} else if ( age == 18 || age < 26 ) {
console.log("Student discount");
} else if (age == 27 || age < 66) {
    console.log("full prize");
} else {
    console.log(" senior")
}    
*/
//--------------------------------------------------------------------------------
/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/
/*
/*let largeCountries = ["China","India","USA","Indonesia","Pakistan"]
/*    console.log("The largest countries in the world: ");
/*for (let i = 0; i < largeCountries.length; i++) {
/*    console.log("- " + largeCountries[i]);
/*}
/*
*/
//-----------------------------------------------------------------------------------
/*
let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]


// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

largeCountries.pop();
largeCountries.push("Pakistan");
largeCountries.shift();
largeCountries.unshift("China");
console.log(largeCountries);
*/
//----------------------------------------------------------------------------------
/*
let dayOfMonth = 13
let weekday = "Friday"

// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&

if ( dayOfMonth === 13 && weekday === "Friday" ) {
    console.log("😱");
}
*/
//--------------------------------------------------------------------------------

let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function randret () {
    let rand = Math.floor(Math.random() * 3) 
    if (rand === 0) {
        return hands[0]
    } else if (rand === 1){
        return hands[1]
    } else {
        return hands[2]
    }
}

console.log(randret());
