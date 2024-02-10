// Write a simple JavaScript program to join all elements of the following array into a
// string.
const arr = ['Nadin', 'is', 'doing', 'JS', 'Practical'];
function ArrayToString(value)
{
    const temp = value.join(" ");
    return temp;
    // return temp+`.and its type is ${typeof temp}`;//to make sure that it is a string or not 🤣
}
console.log(ArrayToString(arr));