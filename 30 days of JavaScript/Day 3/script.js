// Declare firstName, lastName, country, city, age, 
// isMarried, year variable and assign value to it and 
const firstName = "Olaide";
const lastName = "Muhibudeen";
const country = "Nigeria";
const city = "Lagos";
const isMarried = false;
const year = 2024;

// use the typeof operator to check different data types.
console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof isMarried)
console.log(typeof year)

// Check if type of '10' is equal to 10
console.log('10' == 10)

// Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') == 10)

// Write three JavaScript statement which provide truthy value.
let isGender = false
let num = 5
let letter = 'sales'

// Write three JavaScript statement which provide falsy value.
let user = '';
let number = 0;
// let ;2

console.log(4 > 3)//true
console.log(4 >= 3)//false
console.log(4 < 3)//false
console.log(4 <= 3)//false
console.log(4 == 4)//true
console.log(4 != 4)//true
console.log(4 !== 4)//true
console.log(4 != '4')//true
console.log(4 == '4')//true
console.log(4 === '4')//false

console.log(4 > 3 && 10 < 12)//true
console.log(4 > 3 && 10 > 12)//false
console.log(4 > 3 || 10 < 12)//true
console.log(4 > 3 || 10 > 12)//true
console.log(!(4 > 3))//false
console.log(!(4 < 3))//true
console.log(!(false))//true
console.log(!(4 > 3 && 10 < 12))//false
console.log(!(4 > 3 && 10 > 12))//true
console.log(!(4 === '4'))//false


// Use the Date object to do the following activities
const now = new Date()

// What is the year today?
console.log(now.getFullYear())

// What is the month today as a number?
console.log(now.getMonth())

// What is the date today?
console.log(now.getDate())

// What is the day today as a number?
console.log(now.getDay())

// What is the hours now?
console.log(now.getHours())

// What is the minutes now?
console.log(now.getMinutes())

// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(now.getTime())
// or
const miliseconds = Date.now()
console.log(miliseconds)

// let base;
// let height;
// let area = prompt(0.5 * base * height)
// let base = prompt("Enter the base of the triangle");
// console.log(base)
// let height = prompt("Enter the height of the triangle ");
// console.log(height)
// let area = prompt("Enter the area of the triangle");
// console.log(0.5 * base * height)


// let age = [Ayomide]
// age.length > 7 ? "Your name is long" : "Your name is short"
// console.log(age)



// Create a human readable time format using the Date time object
let date = new Date()
let Year = date.getFullYear()
let month = date.getMonth()
let day = date.getDay()
let hours = date.getHours()
let minutes = date.getMinutes()
let zero = 0

// YYYY-MM-DD HH:mm
console.log(`${Year}-${month}-${day} ${hours}:${minutes}`)

// DD-MM-YYYY HH:mm
console.log(`${day}-${month}-${Year} ${hours}:${minutes}`)

// DD/MM/YYYY HH:mm
console.log(`${day}/${month}/${Year} ${hours}:${minutes}`)


// Create a human readable time format using the Date time object. 
// The hour and the minute should be all the time two digits
// (7 hours should be 07 and 5 minutes should be 05 )
console.log(`${Year}-${zero}${month}-${zero}${day} ${hours}:${minutes}`)