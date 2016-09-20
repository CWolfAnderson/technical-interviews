/*
You are given a matrix with  rows and  columns of cells, each of which contains either  or . Two cells are said to be connected if they are adjacent to each other horizontally, vertically, or diagonally. The connected and filled (i.e. cells that contain a ) cells form a region. There may be several regions in the matrix. Find the number of cells in the largest region in the matrix.

Input Format
There will be three parts of t input:
The first line will contain , the number of rows in the matrix.
The second line will contain , the number of columns in the matrix.
This will be followed by the matrix grid: the list of numbers that make up the matrix.

Output Format
Print the length of the largest region in the given matrix.

Constraints



Sample Input:

4
4
1 1 0 0
0 1 1 0
0 0 1 0
1 0 0 0
Sample Output:

5
Task: 
Write the complete program to find the number of cells in the largest region.

Explanation

X X 0 0
0 X X 0
0 0 X 0
1 0 0 0  
The X characters indicate the largest connected component, as per the given definition. There are five cells in this component.
*/
let grid;
let checked = [];

// let x = processData("5\n" +
// "5\n" +
// "1 1 0 0 0\n" +
// "0 1 1 0 0\n" +
// "0 0 1 0 1\n" +
// "1 0 0 0 1\n" +
// "0 1 0 1 1");

// let x = processData("5\n" +
// "4\n" +
// "0 0 1 1\n" +
// "0 0 1 0\n" +
// "0 1 1 0\n" +
// "0 1 0 0\n" +
// "1 1 0 0");

// console.log(x);

function processData(input) {
  
  let max = 0;
  
  let inputArr = input.split("\n");
  
  grid = inputArr.slice(2, (2 + inputArr[0])).map(function(el) {
    return el.split(" ").map(function(e) {
      return parseInt(e);
    });
  });
  
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === 1 && checked.indexOf(string(row, col) < 0)) {
        max = checkNeighbors(row, col, max);
      }
    }
  }
  
  // return max;
  console.log(max);
}

function Coord(r, c) {
  return {
    r: r,
    c: c
  };
}

function checkNeighbors(r, c, max) {
    
  let queue = [];
  
  queue.push(Coord(r, c));
  
  checked.push(string(r, c));
  
  let row, col;
  
  let localMax = 0;
  
  while (queue.length > 0) {
    let current = queue.shift();
    
    localMax += 1;
    
    let top = current.r !== 0;
    let bottom = current.r !== grid.length-1;
    let left = current.c !== 0;
    let right = current.c !== grid[0].length-1;
    
    // top
    if (top) {
      row = current.r-1;
      col = current.c;
      if (grid[row][col] === 1 && checked.indexOf(string(row, col)) < 0) {
        queue.push(Coord(row, col));
        checked.push(string(row, col));
      }	
    }
    // bottom
    if (bottom) {
      row = current.r+1;
      col = current.c;
      if (grid[row][col] === 1 && checked.indexOf(string(row, col)) < 0) {
        queue.push(Coord(row, col));
        checked.push(string(row, col));
      }	
    }
    // left
    if (left) {
      row = current.r;
      col = current.c-1;
      // console.log(row + ", " + col);
      if (grid[row][col] === 1 && checked.indexOf(string(row, col)) < 0) {
        queue.push(Coord(row, col));
        checked.push(string(row, col));
      }
    }
    // right
    if (right) {
      row = current.r;
      col = current.c+1;
      if (grid[row][col] === 1 && checked.indexOf(string(row, col)) < 0) {
        queue.push(Coord(row, col));
        checked.push(string(row, col));
      }      
    }
    // top left
    if (top && left) {
      row = current.r-1;
      col = current.c-1;
      if (grid[row][col] === 1 && checked.indexOf(string(row, col)) < 0) {
        queue.push(Coord(row, col));
        checked.push(string(row, col));
      }
    }
    // top right
    if (top && right) {
      row = current.r-1;
      col = current.c+1;
      if (grid[row][col] === 1 && checked.indexOf(string(row, col)) < 0) {
        queue.push(Coord(row, col));
        checked.push(string(row, col));
      }
    }
    // bottom left
    if (bottom && left) {
      row = current.r+1;
      col = current.c-1;
      if (grid[row][col] === 1 && checked.indexOf(string(row, col)) < 0) {
        queue.push(Coord(row, col));
        checked.push(string(row, col));
      }
    }
    // bottom right
    if (bottom && right) {
      row = current.r+1;
      col = current.c+1;
      if (grid[row][col] === 1 && checked.indexOf(string(row, col)) < 0) {
        queue.push(Coord(row, col));
        checked.push(string(row, col));
      }
    }
  }
  
  return localMax > max ? localMax : max;
  
}

function string(num1, num2) {
  return String(num1) + String(num2);
}

