// Suppose you have an array of product objects, and you want to calculate the total price of all products that cost more than $10.

const products = [
    { name: 'Laptop', price: 1500 },
    { name: 'Phone', price: 800 },
    { name: 'Tablet', price: 400 },
    { name: 'Headphones', price: 50 },
    { name: 'Mouse', price: 25 },
    { name: 'Charger', price: 10 }
  ];
  
  const totalPrice = products
    .filter(product => product.price > 10)         // Filter products that cost more than $10
    .map(product => product.price)                 // Map to an array of prices
    .reduce((accumulator, price) => accumulator + price, 0); // Sum all the prices
  
  console.log(totalPrice); // Output: 2775

  
//   Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample.

const statistics = {
    ages: [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26],
  
    // Count the number of elements in the array
    count() {
      return this.ages.length;
    },
  
    // Sum of all elements in the array
    sum() {
      return this.ages.reduce((acc, age) => acc + age, 0);
    },
  
    // Minimum value in the array
    min() {
      return Math.min(...this.ages);
    },
  
    // Maximum value in the array
    max() {
      return Math.max(...this.ages);
    },
  
    // Range of the array (max - min)
    range() {
      return this.max() - this.min();
    },
  
    // Mean (average) of the array
    mean() {
      return Math.round(this.sum() / this.count());
    },
  
    // Median of the array
    median() {
      const sortedAges = [...this.ages].sort((a, b) => a - b);
      const mid = Math.floor(this.count() / 2);
  
      if (this.count() % 2 === 0) {
        return (sortedAges[mid - 1] + sortedAges[mid]) / 2;
      } else {
        return sortedAges[mid];
      }
    },
  
    // Mode of the array
    mode() {
      const frequency = {};
      this.ages.forEach(age => {
        frequency[age] = (frequency[age] || 0) + 1;
      });
  
      let maxFreq = 0;
      let mode = null;
  
      for (const [age, count] of Object.entries(frequency)) {
        if (count > maxFreq) {
          maxFreq = count;
          mode = age;
        }
      }
  
      return {
        mode: Number(mode),
        count: maxFreq,
      };
    },
  
    // Variance of the array
    variance() {
      const mean = this.mean();
      const squaredDiffs = this.ages.map(age => Math.pow(age - mean, 2));
      const variance = squaredDiffs.reduce((acc, diff) => acc + diff, 0) / this.count();
      return variance.toFixed(1);
    },
  
    // Standard deviation of the array
    std() {
      return Math.sqrt(this.variance()).toFixed(1);
    },
  
    // Frequency distribution (as a percentage of total count)
    freqDist() {
      const frequency = {};
      this.ages.forEach(age => {
        frequency[age] = (frequency[age] || 0) + 1;
      });
  
      const freqDistArray = [];
      for (const [age, count] of Object.entries(frequency)) {
        const percentage = ((count / this.count()) * 100).toFixed(1);
        freqDistArray.push({ age: Number(age), percentage: Number(percentage) });
      }
  
      return freqDistArray.sort((a, b) => b.percentage - a.percentage);
    },
  };
  
  // Example usage
  console.log('Count:', statistics.count()); // 25
  console.log('Sum: ', statistics.sum()); // 744
  console.log('Min: ', statistics.min()); // 24
  console.log('Max: ', statistics.max()); // 38
  console.log('Range: ', statistics.range()); // 14
  console.log('Mean: ', statistics.mean()); // 30
  console.log('Median: ', statistics.median()); // 29
  console.log('Mode: ', statistics.mode()); // {'mode': 26, 'count': 5}
  console.log('Variance: ', statistics.variance()); // 17.5
  console.log('Standard Deviation: ', statistics.std()); // 4.2
  console.log('Frequency Distribution: ', statistics.freqDist());
  // Output: [{age: 26, percentage: 20.0}, {age: 27, percentage: 16.0}, {age: 32, percentage: 12.0}, ...]
  