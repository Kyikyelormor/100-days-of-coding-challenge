// Create an empty object called dog
let dog = {};

// Print the dog object on the console
console.log(dog);

// Add properties to the dog object
dog.name = "Buddy";
dog.legs = 4;
dog.color = "Brown";
dog.age = 3;
dog.bark = function() {
    return "woof woof";
};

// Get the name, legs, color, age, and bark value from the dog object
console.log(dog.name);    // "Buddy"
console.log(dog.legs);    // 4
console.log(dog.color);   // "Brown"
console.log(dog.age);     // 3
console.log(dog.bark());  // "woof woof"

// Set new properties to the dog object
dog.breed = "Golden Retriever";
dog.getDogInfo = function() {
    return `${this.name} is a ${this.age}-year-old ${this.color} ${this.breed} with ${this.legs} legs that says ${this.bark()}.`;
};

// Print the updated dog object
console.log(dog);

// Get the dog info using the getDogInfo method
console.log(dog.getDogInfo());


const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  

//   Find the person with the most skills
  
  let maxSkills = 0;
  let skilledPerson = '';
  
  for (let user in users) {
    if (users[user].skills.length > maxSkills) {
      maxSkills = users[user].skills.length;
      skilledPerson = user;
    }
  }
  
  console.log(`The person with the most skills is: ${skilledPerson}`);


//   Count logged-in users and count users with points greater than or equal to 50

let loggedInCount = 0;
let highPointsCount = 0;

for (let user in users) {
  if (users[user].isLoggedIn) {
    loggedInCount++;
  }
  if (users[user].points >= 50) {
    highPointsCount++;
  }
}

console.log(`Logged-in users: ${loggedInCount}`);
console.log(`Users with >= 50 points: ${highPointsCount}`);


// Find people who are MERN stack developers

let mernDevelopers = [];

for (let user in users) {
  const skills = users[user].skills;
  if (skills.includes('MongoDB') && skills.includes('Express') && skills.includes('React') && skills.includes('Node')) {
    mernDevelopers.push(user);
  }
}

console.log('MERN stack developers:', mernDevelopers.join(', '));

// Set your name in the user object without modifying the original user object

const newUser = { ...users, YourName: { 
    email: 'yourname@domain.com', 
    skills: ['HTML', 'CSS', 'JavaScript'], 
    age: 35, 
    isLoggedIn: true, 
    points: 60 
}};

console.log('New user object with your name added:', newUser);


// Get all keys or properties of the user object

const userKeys = Object.keys(users);
console.log('Keys of the user object:', userKeys);

// Get all the values of the user object

const userValues = Object.values(users);
console.log('Values of the user object:', userValues);



// Print country name, capital, population, and languages using the countries object

const countries = {
    USA: {
      capital: 'Washington, D.C.',
      population: 331000000,
      languages: ['English']
    },
    Germany: {
      capital: 'Berlin',
      population: 83000000,
      languages: ['German']
    },
    Nigeria: {
      capital: 'Abuja',
      population: 206000000,
      languages: ['English', 'Hausa', 'Yoruba', 'Igbo']
    }
    // Add more countries as needed
  };
  
  for (let country in countries) {
    const { capital, population, languages } = countries[country];
    console.log(`${country} - Capital: ${capital}, Population: ${population}, Languages: ${languages.join(', ')}`);
  }
  