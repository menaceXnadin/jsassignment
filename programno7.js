function Second_Greatest_Lowest(arr_num) {
  // Sort the array in ascending order using a custom comparison function
  arr_num.sort(function (x, y) {
    return x - y;
  });
  // make an array named temp with the first element of the sorted array
  var temp = [arr_num[0]];
  var result = []; //this will store the second(smallest and largest number)
  // iterate through the sorted array to remove duplicate elements
  for (var j = 1; j < arr_num.length; j++) {
    if (arr_num[j - 1] !== arr_num[j]) {
      temp.push(arr_num[j]);
    }
  }

  result.push(temp[1], temp[temp.length - 2]);

  return result.join(",");
}

console.log(Second_Greatest_Lowest([1, 2, 3, 4, 5]));
