// . Write a JavaScript function which accepts an argument and returns the type.
function checktype(value) {
  var dtypes = [Function, RegExp, Number, String, Boolean, Object],
    x,
    len;

  if (typeof value === "object" || typeof value === "function") {
    for (x = 0, len = dtypes.length; x < len; x++) {
      if (value instanceof dtypes[x]) {
        return dtypes[x];
      }
    }
  }
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
