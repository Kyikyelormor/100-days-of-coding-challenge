// // Get user input using prompt(“Enter your age:”).If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback 
// //  stating to wait for the number of years he needs to turn 18.

let userInput = prompt("Enter your age")
let age = 18;
let notOfAge = age - userInput
if(userInput >= 18){
    console.log("You are old enough to drive")
} else {
    console.log(`You are left with ${notOfAge} years to drive`)
}

// // Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older 
// // (me or you). Use prompt(“Enter your age:”) to get the age as input.

let myAge = prompt("Enter your age")
let yourAge = prompt("Enter my age")

if (yourAge > myAge){
    console.log(`You are ${yourAge - myAge} years older than me`)
} else {
    console.log(`I am ${myAge - yourAge} years older than you`)
}

// // If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

// // using if else
let a = 4;
let b = 3;
if (a > b){
    console.log("a is greater than b")
} else{
    console.log("a is less than b")
}

// // ternary operator.
let c = a > b
switch (c) {
    case a > b:
        c = ("a is greater than b")
        break;

    default:
        c = ("a is less than b")
        break;
}

console.log(c)

// // Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let number = prompt("Enter a number")
if(number % 2 === 0){
    console.log(`${number} is an even number`)
} else {
    console.log(`${number} is an odd number`)
}

// // Write a code which can give grades to students according to theirs scores
// Prompt user for the score
const score = parseFloat(prompt("Enter the student's score:"));

// Function to determine the grade based on the score
function getGrade(score) {
    if (score >= 80 && score <= 100) {
        return 'A';
    } else if (score >= 70 && score <= 79) {
        return 'B';
    } else if (score >= 60 && score <= 69) {
        return 'C';
    } else if (score >= 50 && score <= 59) {
        return 'D';
    } else if (score >= 0 && score <= 49) {
        return 'F';
    } else {
        return 'Invalid score'; // Handle out-of-range scores
    }
}

// Determine the grade
const grade = getGrade(score);

// Display the result
console.log(`The grade for a score of ${score} is ${grade}`);


// // Check if the season is Autumn, Winter, Spring or Summer. If the user input is 
// let season = prompt("Enter a Month")
// if (season == "September" || season == "October" || season == "November") {
//     console.log("The season is Autumn")
// } else if (season == "December" || season == "January" || season == "February") {
//     console.log("The season is Winter")
// } else if (season == "March" || season == "April" || season == "May") {
//     console.log("The season is Spring")
// } else if (season == "June" || season == "July" || season == "August") {
//     console.log("The season is Summer")
// } else {
//     console.log("It's no season") 
// };

// // Check if a day is weekend day or a working day.
let dayOfWeek = prompt("What is the day today?")
if (dayOfWeek == "Monday" || dayOfWeek == "Tuesday" || dayOfWeek == "Wednesday"
    || dayOfWeek == "Thursday" || dayOfWeek == "Friday") {
    console.log(`${dayOfWeek} is a working day`)
} else if (dayOfWeek == "Saturday" || dayOfWeek == "Sunday") {
    console.log(`${dayOfWeek} is a weekend`)
} else{
    console.log("It's no day")
};


// Write a program that tells the number of days in a month, now consider leap year.
// Function to check if a year is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Function to get the number of days in a given month
function getDaysInMonth(month, year) {
    // Handle invalid month input
    if (month < 1 || month > 12) {
        return 'Invalid month';
    }
    
    // Days in each month
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    // Adjust for leap year
    if (month === 2 && isLeapYear(year)) {
        return 29;
    }
    
    return daysInMonth[month - 1];
}

// Prompt user for the month and year
const month = parseInt(prompt("Enter the month (1-12):"), 10);
const year = parseInt(prompt("Enter the year:"), 10);

// Get the number of days in the month
const days = getDaysInMonth(month, year);

// Display the result
console.log(`The number of days in month ${month} of year ${year} is ${days}`);
