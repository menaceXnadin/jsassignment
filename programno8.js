// Write a JavaScript function to check whether an `input` is an array or not

function is_array(my_input) {
  if (Array.isArray(my_input)) {
    return "yes it is ${";
  } else {
    return `it is not array rather it's a ${typeof my_input}`;
  }
    }
//   if (my_input instanceof Array) {
//     return "yes it is array";
//   } else {
//     return `it is not array rather it's a ${typeof my_input}.`;
//   }
// }

console.log(is_array([1, 2, 4, 0]));
console.log(is_array(12));
console.log(is_array("subash"));
