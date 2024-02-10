// Creating a regular expression object
let regex = /\d+/; // Matches one or more digits

// Using exec() method to search for a match
let result = regex.exec("The year is 2053");
console.log("Match found:", result[0]); // Output: "2022"

// Using toString() method to convert regex object to string
let regexString = regex.toString();
console.log("Regular expression as string:", regexString); 
