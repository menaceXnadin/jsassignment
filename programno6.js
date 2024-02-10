// . Write a JavaScript function which accepts an argument and returns the type.

function checktype(value) {
    return typeof value;

}
console.log(checktype(12)); 
console.log(checktype("hello")); 
console.log(checktype(true)); 
console.log(checktype({})); 
console.log(checktype([])); 
console.log(checktype(/[a-z]+/));
console.log(checktype(null)); 
console.log(checktype(undefined));
