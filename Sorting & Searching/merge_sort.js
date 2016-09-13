/*
Implement merge sort.
*/

'use strict';

let numbers = [12, 43, 6, 21, 64, 23, 67, 1];
let sortedNumbers = mergeSort(numbers);
console.log(sortedNumbers);

function mergeSort(arr) {
  let helperArr = [];
  mergeSortHelper(arr, helperArr, 0, arr.length - 1);
  return arr;
}

function mergeSortHelper(arr, helperArr, low, high) {

  if (low < high) {
    let middle = Math.floor((low + high) / 2);
    // sort left
    mergeSortHelper(arr, helperArr, low, middle);
    // sort right
    mergeSortHelper(arr, helperArr, middle + 1, high);
    // merge
    merge(arr, helperArr, low, middle, high);
  }

}

function merge(arr, helperArr, low, middle, high) {

  // copy both halves into helperArr array
  for (let i = low; i <= high; i++) {
    helperArr[i] = arr[i];
  }
  // console.log(helperArr);
  let left = low;
  let right = middle + 1;
  let current = low;

  // iterate through helperArr, comparing left & right half, copying the smaller element
  while (left <= middle && right <= high) {
    if (helperArr[left] <= helperArr[right]) {
      arr[current] = helperArr[left];
      left += 1;
    } else {
      arr[current] = helperArr[right];
      right += 1;
    }
    current += 1;
  }
  // copy the rest of the left side of the array into target array
  let remaining = middle - left;
  for (let i = 0; i <= remaining; i++) {
    arr[current + i] = helperArr[left + i];
  }

}