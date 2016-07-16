/*
Implement merge sort.
*/

var arr = [12, 43, 6, 21, 64, 23, 67, 1];
var x = mergeSort(arr);
console.log(x);

function mergeSort(arr) {
  var helper = [];
  mergeSortHelper(arr, helper, 0, arr.length-1);
  return arr;
}

function mergeSortHelper(arr, helper, low, high) {
  
  if (low < high) {
    var middle = Math.floor((low + high) / 2);
    // sort left
    mergeSortHelper(arr, helper, low, middle);
    // sort right
    mergeSortHelper(arr, helper, middle+1, high);
    // merge
    merge(arr, helper, low, middle, high);
  }

}

function merge(arr, helper, low, middle, high) {
  
  // copy both halves into helper array
  for (var i = low; i <= high; i++) {
    helper[i] = arr[i];
  }
  // console.log(helper);
  var left = low;
  var right = middle + 1;
  var current = low;
  
  // iterate through helper, comparing left & right half, copying the smaller element
  while (left <= middle && right <= high) {
    if (helper[left] <= helper[right]) {
      arr[current] = helper[left];
      left += 1;
    } else {
      arr[current] = helper[right];
      right += 1;
    }
    current += 1;
  }
  // copy the rest of the left side of the array into target array
  var remaining = middle - left;
  for (var i = 0; i <= remaining; i++) {
    arr[current + i] = helper[left + i];
  }
  
}