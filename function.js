/**
 * String Manipulation Functions
 */
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  function countCharacters(str) {
    return str.length;
  }
  
  function capitalizeWords(sentence) {
    const words = sentence.split(' ');
    const capitalizedWords = words.map(word => 
      word.length > 0 ? word[0].toUpperCase() + word.slice(1) : word
    );
    return capitalizedWords.join(' ');
  }
  
  /**
   * Array Functions
   */
  function findMax(arr) {
    if (arr.length === 0) return undefined;
    return Math.max(...arr);
  }
  
  function findMin(arr) {
    if (arr.length === 0) return undefined;
    return Math.min(...arr);
  }
  
  function sumArray(arr) {
    if (arr.length === 0) return 0;
    return arr.reduce((sum, num) => sum + num, 0);
  }
  
  function filterArray(arr, condition) {
    return arr.filter(condition);
  }
  
  /**
   * Mathematical Functions
   */
  function factorial(n) {
    if (n < 0) return undefined;
    if (n <= 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++)  result *= i;
    return result;
  }
  
  function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) 
      if (n % i === 0 || n % (i + 2) === 0) return false;
    return true;
  }
  
  function fibonacciSequence(terms) {
    if (terms <= 0) return [];
    if (terms === 1) return [0];
    const sequence = [0, 1];
    for (let i = 2; i < terms; i++) 
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    return sequence;
  }
  
  /**
   * Example Usage
   */
  console.log("--- String Functions ---");
  console.log("Reversed String:", reverseString("hello"));
  console.log("Character Count:", countCharacters("hello"));
  console.log("Capitalized Words:", capitalizeWords("this is a sentence"));
  
  console.log("\n--- Array Functions ---");
  const numbers = [5, 2, 8, 1, 9];
  console.log("Maximum Value:", findMax(numbers));
  console.log("Minimum Value:", findMin(numbers));
  console.log("Sum of Array:", sumArray(numbers));
  const evenNumbers = filterArray(numbers, num => num % 2 === 0);
  console.log("Even Numbers:", evenNumbers);
  
  console.log("\n--- Math Functions ---");
  console.log("Factorial of 5:", factorial(5));
  console.log("Is 7 a prime number?", isPrime(7));
  console.log("Is 10 a prime number?", isPrime(10));
  console.log("Fibonacci Sequence (10 terms):", fibonacciSequence(10));
  