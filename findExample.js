// find the elements in the array that are greater than the average
// of the elements in the array
// Language: javascript

function findExample(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let avg = sum / arr.length;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > avg) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

let unsortedArray = [33, 22, 11, 55, 66, 44, 12, 88, 77];
console.log(findExample(unsortedArray));