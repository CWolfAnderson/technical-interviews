/*
Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

Example:
For num = 5 you should return [0,1,1,2,1,2].
*/


/*
0   0000  0
1   0001  1

2   0010  1
3   0011  2

4   0100  1
5   0101  2
6   0110  2
7   0111  3

8   1000  1
9   1001  2
10  1010  2
11  1011  3
12  1100  2
13  1101  3
14  1110  3
15  1111  4
...
*/

let maxBits = 32;

let numBits = countBits(5);

console.log(numBits);

function countBits(n) {
  
  let bits = [];
  let count = 0;
  
  for (let i = 0; i <= n; i++) { // 0    

      let temp = i;
      
      // 8, 4, 2, 1
      if (temp >= 8) {
        count += 1;
        temp -= 8;
      }
      if (temp >= 4) {
        count += 1;
        temp -= 4;
      }
      if (temp >= 2) {
        count += 1;
        temp -= 2;
      }
      if (temp >= 1) {
        count += 1;
        temp -= 1;
      }
      bits.push(count);
      count = 0;      
  }
  
  return bits;
}



















