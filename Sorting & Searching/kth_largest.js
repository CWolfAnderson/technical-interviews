/*
Given a list, return the kth largest element.
*/

"use strict";

var array = [1, 10, 6, 5, 9, 13, 12, 4, 7, 11];

let kthLargest = getKthLargest(array, 5);

console.log(`5th largest element of ${array} is ${kthLargest}`);

function getKthLargest(arr, k) {

  var left = [];
  var right = [];
  var pivot;
  var rank;

  while (true) {

    pivot = arr[Math.floor(arr.length / 2)];
    console.log(`pivot ${pivot}`);
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else if (arr[i] > pivot) {
        right.push(arr[i]);
      }
    }

    rank = right.length + 1;

    if (rank < k) {
      k -= rank;
      arr = left;
    } else if (rank > k) {
      arr = right;
    } else {
      return pivot;
    }

    left = [];
    right = [];

  }

}