// Write a JavaScript function to check whether an `input` is a date object or no
function is_date(value) {
  if (value instanceof Date) {
    return `${value} is a date `;
  } else {
    return `it is not a date but a ${typeof value}`;
  }
}

const date_1 = new Date();
const date_2 = new Date("2022-12-01");
const date_3 = new Date(2012, 11, 3);
const a = 2;
console.log(is_date(date_1));
console.log(is_date(date_2));
console.log(is_date(date_3));
console.log(is_date(a));
