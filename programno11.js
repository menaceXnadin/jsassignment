// Write a JavaScript function to check whether an `input` is a string or not
function is_string(value) {
    if (typeof value == 'string')
    {
        return `yes,it is a ${typeof value}`;
    }
    else {
        return false+" NOT A STRING";
        
    }

}

const data_1 = "hello world";
const data_2 = 3; 
const data_3 = new Date(2012, 11, 3);
console.log(is_string(data_1));
console.log(is_string(data_2));
console.log(is_string(data_3));
