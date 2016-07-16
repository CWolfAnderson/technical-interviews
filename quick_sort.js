/*
Implement Quick Sort.
*/

var arr = [12, 43, 6, 21, 64, 23, 67, 1];
var x = quickSort(arr, 0, arr.length-1);
console.log(x);

function quickSort(arr, left, right) {
  
  var index = partition(arr, left, right);
  if (left < index-1) {
    // sort left half
    quickSort(arr, left, index-1);
  }
  if (index < right) {
    // sort right half
    quickSort(arr, index, right);
  }
  
  return arr;
  
}

function partition(arr, left, right) {
  
  var pivot = arr[Math.floor((left + right)/2)];

  while (left <= right) {
    // find element on left that should be on right
    while (arr[left] < pivot) left += 1;
    
    // find element on right that should be on left
    while (arr[right] > pivot) right -= 1;
    
    // swap elements
    if (left <= right) {
      swap(arr, left, right);
      left += 1;
      right -= 1;
    }
    
  }

  return left;
}

function swap(arr, i1, i2) {
  var temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
}