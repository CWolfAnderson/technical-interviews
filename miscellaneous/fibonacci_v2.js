/*
Compute the nth Fibonacci nber.
0, 1, 1, 2, 3, 5, 8, 13 ...
*/

let fibn = fibHelper(5);

console.log(fibn);

function fibHelper(n) {
  return fib(n, Array(n+1).fill(0));
}

function fib(i, memo) {
  if (i === 0 || i === 1) return i;
  
  if (memo[i] === 0) {
    memo[i] = fib(i-1, memo) + fib(i-2, memo);
  }
  
  return memo[i];
  
}