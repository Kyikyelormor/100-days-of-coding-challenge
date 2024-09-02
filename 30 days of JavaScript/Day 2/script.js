let challenge = "30 Days Of JavaScript"
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(0,1))
console.log(challenge.split(""))
console.log(challenge.replace("JavaScript", "Python"))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt("J"))
console.log(challenge.indexOf(a))
console.log(challenge.lastIndexOf(a))
console.log(challenge.repeat(2))
console.log(`'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`)
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`)
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");


const sentence = 'You cannot end a sentence with because because because is a conjunction';
const start = sentence.indexOf('because because because');
const phrase = sentence.substr(start, 'because because because'.length);

console.log(phrase);



const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

const cleanedSentence = sentence.replace(/[%@$#&;!?]/g, ''); // Removing unwanted characters

const words = cleanedSentence.split(/\s+/); // Splitting the sentence into words

// Counting the frequency of each word
const wordFrequency = words.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});

// Finding the most frequent word
const mostFrequentWord = Object.keys(wordFrequency).reduce((a, b) => 
  wordFrequency[a] > wordFrequency[b] ? a : b
);

console.log(`The cleaned sentence is: "${cleanedSentence}"`);
console.log(`The most frequent word is: "${mostFrequentWord}"`);


const text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

// Extract numbers from the text
const numbers = text.match(/\d+/g).map(Number);

// Calculate monthly income and annual income
const monthlySalary = numbers[0];
const annualBonus = numbers[1];
const monthlyCourses = numbers[2];

// Calculate total annual income
const annualSalary = monthlySalary * 12;
const totalAnnualIncome = annualSalary + annualBonus + monthlyCourses * 12;

console.log(`Total annual income: ${totalAnnualIncome} euro`);
