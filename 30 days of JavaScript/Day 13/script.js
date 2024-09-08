// Display the countries array as a table
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  console.table(countries)

//   Display the countries object as a table
const user = [
    {
      name: 'Asabeneh',
      title: 'Programmer',
      country: 'Finland',
      city: 'Helsinki',
      age: 250
    },
    {
      name: 'Eyob',
      title: 'Teacher',
      country: 'Sweden',
      city: 'London',
      age: 25
    },
    {
      name: 'Asab',
      title: 'Instructor',
      country: 'Norway',
      city: 'Oslo',
      age: 22
    },
    {
      name: 'Matias',
      title: 'Developer',
      country: 'Denmark',
      city: 'Copenhagen',
      age: 28
    }
  ]
  console.table(user)


// Use console.group() to group logs
const names = ['Asabeneh', 'Brook', 'David', 'John']
const Countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const User = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.group('Names')
console.log(names)
console.groupEnd()

console.group('Countries')
console.log(Countries)
console.groupEnd()

console.group('Users')
console.log(User)
console.log(users)
console.groupEnd()


// 10 > 2 * 10 use console.assert()
console.assert(10 > 2 * 10, '10 is greater than 3') // no result
console.assert(3 > 4, '20 is not greater than 4') // Assertion failed: 3 is not greater than 4

for (let i = 0; i <= 10; i += 1) {
  let errorMessage = `${i} is not even`
  console.log('the # is ' + i)
  console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage })
}


// Write a warning message using console.warn()
console.warn('This is a warning')
console.warn(
  'You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!'
)
console.warn('Warning is different from error')

// Write an error message using console.error()
console.error('This is an error message')
console.error('We all make mistakes')

// Check the speed difference among the following loops: while, for, for of, forEach
// Array to loop over
const arr = Array(1_000_000).fill(0);

// Measure the time taken by while loop
let i = 0;
console.time('While loop');
while (i < arr.length) {
  arr[i]++;
  i++;
}
console.timeEnd('While loop');

// Measure the time taken by for loop
console.time('For loop');
for (let i = 0; i < arr.length; i++) {
  arr[i]++;
}
console.timeEnd('For loop');

// Measure the time taken by for...of loop
console.time('For...of loop');
for (let value of arr) {
  value++;
}
console.timeEnd('For...of loop');

// Measure the time taken by forEach loop
console.time('forEach loop');
arr.forEach((value, index) => {
  arr[index]++;
});
console.timeEnd('forEach loop');

