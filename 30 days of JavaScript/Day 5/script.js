let arr = [];
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  console.log(webTechs.length)
  console.log(webTechs[0])

 
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array
ages.sort((a, b) => a - b);

// Find the min and max age
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

// Find the median age
const middle = Math.floor(ages.length / 2);
let median;

if (ages.length % 2 === 0) {
    // Even number of elements: average of the two middle values
    median = (ages[middle - 1] + ages[middle]) / 2;
} else {
    // Odd number of elements: middle value
    median = ages[middle];
}

// Find the average age
const average = ages.reduce((acc, age) => acc + age, 0) / ages.length;

// Find the range of the ages
const range = maxAge - minAge;

// Compare the value of (min - average) and (max - average), using abs()
const minAverageDiff = Math.abs(minAge - average);
const maxAverageDiff = Math.abs(maxAge - average);

// Display the results
console.log(`Sorted ages: ${ages}`);
console.log(`Min age: ${minAge}`);
console.log(`Max age: ${maxAge}`);
console.log(`Median age: ${median}`);
console.log(`Average age: ${average}`);
console.log(`Range of ages: ${range}`);
console.log(`|Min - Average|: ${minAverageDiff}`);
console.log(`|Max - Average|: ${maxAverageDiff}`);


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift("Meat")
shoppingCart.pop()
shoppingCart.push("Sugar")
shoppingCart[3] = "Green Tea"
console.log(shoppingCart)