// Develop a JavaScript function named displayInfo that displays information about a user.
// Declare variables username with the value "JohnDoe", age with the value 30, and
// isSubscribed with the value true. Print the user information using these variables
function displayInfo(user) {
  for (key in user) {
    console.log(key + " : " + user[key]);
  }
}

// Declare user object
let user = {
  username: "JohnDoe",
  age: 30,
  isSubscribed: true,
};

// Call the function to display user information
displayInfo(user);
