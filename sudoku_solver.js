https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png

// https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Sudoku-by-L2G-20050714_solution.svg/2000px-Sudoku-by-L2G-20050714_solution.svg.png

'use  strict';

var _ = require('underscore');


var good_sudoku = [
                    [7,8,4,1,5,9,3,2,6], 
                    [5,3,9,6,7,2,8,4,1], 
                    [6,1,2,4,3,8,7,5,9], 
                    [9,2,8,7,1,5,4,6,3], 
                    [3,5,7,8,4,6,1,9,2], 
                    [4,6,1,9,2,3,5,8,7], 
                    [8,7,6,3,9,4,2,1,5], 
                    [2,4,3,5,6,1,9,7,8], 
                    [1,9,5,2,8,7,6,3,4] 
    ];


// part 1 - all rows have unique digits 1-9
// checkRow
function checkRow(sudoku) {

  for (var i = 0; i < sudoku.length; i++) {
    var row = sudoku[i];

    var count = {};

    for (var j = 0; j < row.length; j++) {

      var num = row[j];

      if (count[num]) {
        count[num] += 1;
        return false;
      } else {
        count[num] = 1;
      }
    }

  }

  return true;

}

var rowCheck = checkRow(good_sudoku);
console.log('rowCheck: ' + rowCheck);

// part 2 - all columns have unique digits 1-9
// checkColumn

function checkCol(sudoku) {

  for (var i = 0; i < sudoku.length; i++) { // 0
    var count = {};

    for (var j = 0; j < sudoku[i].length; j++) { // 0-8
      if (count[sudoku[j][i]]) {
        return false;
      } else {
        count[sudoku[j][i]] = 1;
      }
    }

  }

  return true;
}

var colCheck = checkCol(good_sudoku);
console.log('colCheck: ' + colCheck);


// part 3 - every 3x3 matrix (there are 9) have unique digits 1-9
// checkMatrix

/*
00 01 02 03 04 05 06 07 08
10 11 12 13 14 15 16 17 18
20 21 22 23 24 25 26 27 28
30 31 32 33 34 35 36 37 38
40 41 42 43 44 45 46 47 48
50 51 52 53 54 55 56 57 58
60 61 62 63 64 65 66 67 68
70 71 72 73 74 75 76 77 78
80 81 82 83 84 85 86 87 88
*/

// 0-2
// 3-5
// 6-8

function checkMatrix(sudoku) {
 
  // outer matrix
  for (var g = 0; g <= 6; g+=3) { // row
    for (var h = 0; h <= 6; h+=3) { // col

      var count = {};

      // inner matrix
      for (var i = h; i < h+3; i++) {
        for (var j = g; j < g+3; j++) {

          console.log(`i: ${i}, j: ${j}`);

          if (count[sudoku[i][j]]) {

            return false;
          } else {
            count[sudoku[i][j]] = 1;
          }
        }
        console.log('-----------');
      }
      console.log('==================');

    }
  }

// [0][0]
//   for (var i = 0; i < 3; i++) { // 0-2
//     var count = {};
//     for (var j = 0; j < 3; j++) { // 0-2
//       if (count[sudoku[i][j]]) {
//         return false;
//       } else {
//         count[sudoku[i][j]] = 1; 
//       }
//     }
//   }

// [0][1]
//   for (var i = 0; i < 3; i++) { // 0-2
//     var count = {};
//     for (var j = 3; j < 6; j++) { // 3-5
//       if (count[sudoku[i][j]]) {
//         return false;
//       } else {
//         count[sudoku[i][j]] = 1; 
//       }
//     }
//   }

// [0][2]
//   for (var i = 0; i < 3; i++) { // 0-2
//     var count = {};
//     for (var j = 6; j < 9; j++) { // 6-8
//       if (count[sudoku[i][j]]) {
//         return false;
//       } else {
//         count[sudoku[i][j]] = 1; 
//       }
//     }
//   }

// ---------------------------------------
  
// [1][0]
//     for (var i = 3; i < 6; i++) { // 3-5
//     var count = {};
//     for (var j = 0; j < 3; j++) { // 0-2
//       if (count[sudoku[i][j]]) {
//         return false;
//       } else {
//         count[sudoku[i][j]] = 1; 
//       }
//     }
//   }
  
// [1][1]
//     for (var i = 3; i < 6; i++) { // 3-5
//     var count = {};
//     for (var j = 3; j < 6; j++) { // 3-5
//       if (count[sudoku[i][j]]) {
//         return false;
//       } else {
//         count[sudoku[i][j]] = 1; 
//       }
//     }
//   }
  
// [1][2]
//     for (var i = 3; i < 6; i++) { // 3-5
//     var count = {};
//     for (var j = 6; j < 9; j++) { // 6-8
//       if (count[sudoku[i][j]]) {
//         return false;
//       } else {
//         count[sudoku[i][j]] = 1; 
//       }
//     }
//   }
  
// ---------------------------------------
  
// [2][0]
//     for (var i = 6; i < 9; i++) { // 6-8
//     var count = {};
//     for (var j = 0; j < 3; j++) { // 0-2
//       if (count[sudoku[i][j]]) {
//         return false;
//       } else {
//         count[sudoku[i][j]] = 1; 
//       }
//     }
//   }
  
// [2][1]
//     for (var i = 6; i < 9; i++) { // 6-8
//     var count = {};
//     for (var j = 3; j < 6; j++) { // 3-5
//       if (count[sudoku[i][j]]) {
//         return false;
//       } else {
//         count[sudoku[i][j]] = 1; 
//       }
//     }
//   }  

// [2][2]
//     for (var i = 6; i < 9; i++) { // 6-8
//     var count = {};
//     for (var j = 6; j < 9; j++) { // 6-8
//       if (count[sudoku[i][j]]) {
//         return false;
//       } else {
//         count[sudoku[i][j]] = 1; 
//       }
//     }
//   }
  
  
  return true;
  
}


var matrixCheck = checkMatrix(good_sudoku);
console.log('matrixCheck: ' + matrixCheck);