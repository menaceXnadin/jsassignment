// Write a JavaScript program to list the properties of a JavaScript object.
function prop_obj(value) {
  var temp = [];
  var index = 0;
  for (key in value) {
    temp[index] = key + " : " + value[key];
    index++;
  }
  return temp;
}
const obj = {
  name: "nadin",
  lastname: "tamang",
  rollno: 40,
};
console.log(prop_obj(obj));
