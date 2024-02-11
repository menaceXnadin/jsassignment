//  Write a JavaScript program to use of error handling mechanism using:
//  a)try-catch-finally block
//  b)try-throw-catch

try {
  let result = 10 / 0;
  if (result == "Infinity") {
    throw "Division by zero occurred.";
  } else {
    console.log(`result is ${result}`);
  }
} catch (error) {
  console.log("Error:", error.toString(error));
} finally {
  console.log("Finally block executed.");
}
