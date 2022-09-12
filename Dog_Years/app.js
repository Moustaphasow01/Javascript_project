//create a variable and set age
let myAge = 21;
//Create a variable named earlyYears and save the value 2 to it
let earlyYears = 2;
earlyYears *= 10.5;

let laterYears = myAge - 2;
//Multiply the laterYears variable by 4
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

let myAgeInDogYears = earlyYears + laterYears;

let myName = "Moustapha".toLowerCase();
console.log(
  `My name is ${myName}. I am HUMAN ${myAge} years old in human years which is DOG ${myAgeInDogYears} years old in dog years.`
);
