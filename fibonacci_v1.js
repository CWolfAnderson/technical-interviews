/*
Compute the nth Fibonacci nber.
0, 1, 1, 2, 3, 5, 8, 13 ...
*/

let fibn = fib(5);

console.log(fibn);

function fib(n) {
  
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
  
}

/*
  fib(5)
  fib(4) fib(3)
  fib(3) fib(2)   fib(2) fib(1)
  fib(2) fib(1)   fib(1) fib(0)   fib(1) fib(0)
  fib(1) fib(0)
*/