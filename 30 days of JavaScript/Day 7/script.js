function printFullName (){
      let firstName = 'Asabeneh'
      let lastName = 'Yetayeh'
      let space = ' '
      let fullName = firstName + space + lastName
      return fullName
}
console.log(printFullName())

// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

function calculateBMI(weight, height) {
      // Calculate BMI
      const bmi = weight / (height * height);
  
      // Determine the BMI category
      let category;
      if (bmi < 18.5) {
          category = 'Underweight';
      } else if (bmi >= 18.5 && bmi <= 24.9) {
          category = 'Normal weight';
      } else if (bmi >= 25 && bmi <= 29.9) {
          category = 'Overweight';
      } else {
          category = 'Obese';
      }
  
      // Return the result
      return {
          bmi: bmi.toFixed(2),  // Round BMI to 2 decimal places
          category: category
      };
  }
  
  // Example usage
  const weight = parseFloat(prompt("Enter your weight in kg:"));
  const height = parseFloat(prompt("Enter your height in meters:"));
  
  const results = calculateBMI(weight, height);
  
  console.log(`Your BMI is ${result.bmi} and you are classified as ${result.category}`);
  
//   Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

function factorial(n) {
      // Check for invalid input
      if (n < 0) {
          return 'Invalid input'; // Factorial is not defined for negative numbers
      }
      // Initialize result
      let result = 1;
      // Calculate factorial iteratively
      for (let i = 1; i <= n; i++) {
          result *= i;
      }
      return result;
  }
  
  // Example usage
  const number = parseInt(prompt("Enter a whole number:"), 10);
  const result = factorial(number);
  
  console.log(`The factorial of ${number} is ${result}`);
  
  