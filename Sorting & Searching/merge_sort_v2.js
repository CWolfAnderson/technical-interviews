'use strict';

let nums = [6, 5, 4, 3, 2, 1];

mergeSort(nums);

console.log(nums);

function mergeSort(arr) {
  let n = arr.length;
  if (n < 2) return;
  let mid = Math.floor(n/2);
  let left = new Array(mid);
  let right = new Array(n-mid);
  for (let i = 0; i < mid; i++) {
    left[i] = arr[i];
  }
  for (let i = mid; i < n; i++) {
    right[i-mid] = arr[i];
  }
  mergeSort(left);
  mergeSort(right);
  merge(left, right, arr);
}

function merge(l, r, a) {
  let nL = l.length;
  let nR = r.length;
  let i = 0;
  let j = 0;
  let k = 0;
  
  while (i < nL && j < nR) {
    if (l[i] <= r[j]) {
      a[k] = l[i];
      i += 1;
    } else {
      a[k] = r[j];
      j += 1;
    }
    k += 1;
  }
  
  while (i < nL) {
    a[k] = l[i];
    i += 1;
    k += 1;
  }
  
  while (j < nR) {
    a[k] = r[j];
    j += 1;
    k += 1;
  }
  
}