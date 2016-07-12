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

var maxBits = 32;

/*
4 -> 8
8 -> 128
2^n-1
*/

var numBits = countBits(5);

console.log(numBits);

function countBits(n) {
  
  var bits = [];
  var count = 0;
  
  // create array of bit values (i.e. [128, 64, 32, 16, 8, 4, 2, 1])
  var bitValues = [];
  var leftMostBit = Math.pow(2, maxBits-1);
  for (var i = 0; i < maxBits; i++) {
    bitValues.push(leftMostBit);
    leftMostBit /= 2;
  }
    
  for (var i = 0; i <= n; i++) {
      var temp = i;
      for (var j = 0; j < bitValues.length; j++) {
        if (temp >= bitValues[j]) {
          count += 1;
          temp -= bitValues[j];
        }
      }      
      bits.push(count);
      count = 0;      
  }
  
  return bits;
}



















