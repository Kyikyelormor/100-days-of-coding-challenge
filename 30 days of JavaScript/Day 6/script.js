for (let i = 1; i <= 7; i++) {
    console.log('1'.repeat(i));
}

for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`);
}

for (let i = 0; i <= 10; i++) {
    console.log(`${i}${+i}`);
}

for(let i = 0; i<= 100; i +=2){
    console.log(i)
}

for(let i = 1; i<= 100; i +=2){
    console.log(i)
}

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

for (let i = 0; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}

let sum = 0
for (let i = 0; i <= 100; i++) {
    sum +=i
}
console.log("The sum of all numbers from 0 to 100 is:", sum);

let sums = 0
for (let i = 0; i <= 100; i+= 2) {
    sums +=i
}
console.log("The sum of all numbers from 0 to 100 is:", sums);

let Sum = 0
for (let i = 1; i <= 100; i+=2) {
    Sum +=i
}
console.log("The sum of all numbers from 0 to 100 is:", Sum);