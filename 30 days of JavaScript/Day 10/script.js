// create an empty set
const companies = new Set()
console.log(companies)

// Create a set containing 0 to 10 using loop
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const setOfNumbers = new Set(nums)

for (const num of setOfNumbers) {
  console.log(num)
}

// Remove an element from a set
// console.log(nums.delete("5"))

// Clearing the set
// nums.clear()
// console.log(nums)

// Create a set of 5 string elements from array
const languages = [
    'English',
    'French',
    'Spanish',
    'Arabic',
    'korea',
  ]
  
  const setOfLanguages = new Set(languages)
  console.log(setOfLanguages)

//   Create a map of countries and number of characters of a country
// List of countries
const countries = [
  'United States', 
  'Canada', 
  'Mexico', 
  'Brazil', 
  'Argentina', 
  'Germany', 
  'France', 
  'Australia', 
  'India', 
  'China'
];

// Create a map of country names and their character count
const countryCharMap = new Map();

// Populate the map
countries.forEach(country => {
  countryCharMap.set(country, country.length);
});

// Log the map
countryCharMap.forEach((charCount, country) => {
  console.log(`${country}: ${charCount} characters`);
});

