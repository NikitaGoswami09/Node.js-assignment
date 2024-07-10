// Import the crypto module
const crypto = require('crypto');

// Get command line arguments
const args = process.argv.slice(2);

// Check if there are enough arguments
if (args.length < 1) {
  console.log("Please provide an operation and the necessary arguments.");
  process.exit(1);
}

const operation = args[0];

// Function to perform addition
function add(numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

// Function to perform subtraction
function sub(numbers) {
  return numbers.reduce((acc, num) => acc - num);
}

// Function to perform multiplication
function mult(numbers) {
  return numbers.reduce((acc, num) => acc * num, 1);
}

// Function to perform division
function divide(numbers) {
  return numbers.reduce((acc, num) => acc / num);
}

// Function to calculate sine
function sin(number) {
  return Math.sin(number);
}

// Function to calculate cosine
function cos(number) {
  return Math.cos(number);
}

// Function to calculate tangent
function tan(number) {
  return Math.tan(number);
}

// Function to generate a random number of specified length
function random(length) {
  if (length === undefined) {
    console.log("Provide length for random number generation.");
    return;
  }
  // Generate random bytes and convert them to a hex string
  return crypto.randomBytes(length).toString('hex').slice(0, length);
}

// Parse numbers from the command line arguments
const numbers = args.slice(1).map(Number);

// Perform the operation based on the first argument
switch (operation) {
  case 'add':
    console.log(add(numbers));
    break;
  case 'sub':
    console.log(sub(numbers));
    break;
  case 'mult':
    console.log(mult(numbers));
    break;
  case 'divide':
    console.log(divide(numbers));
    break;
  case 'sin':
    if (numbers.length !== 1) {
      console.log("Please provide one number for the sine operation.");
    } else {
      console.log(sin(numbers[0]));
    }
    break;
  case 'cos':
    if (numbers.length !== 1) {
      console.log("Please provide one number for the cosine operation.");
    } else {
      console.log(cos(numbers[0]));
    }
    break;
  case 'tan':
    if (numbers.length !== 1) {
      console.log("Please provide one number for the tangent operation.");
    } else {
      console.log(tan(numbers[0]));
    }
    break;
  case 'random':
    if (numbers.length !== 1) {
      console.log("Provide length for random number generation.");
    } else {
      console.log(random(numbers[0]));
    }
    break;
  default:
    console.log("Invalid operation");
}
