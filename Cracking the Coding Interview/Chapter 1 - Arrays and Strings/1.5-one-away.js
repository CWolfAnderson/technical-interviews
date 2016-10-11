/*
One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.

insert, remove, replace

function oneEditAway(str1, str2)

// edit
I: 'hello', 'hellp'
O: true

// insert
I: 'hell', 'hello'
O: true

// remove
I: 'hello', 'hell'
O: true

edge cases:
I: 'hello', 'hello'
O: true

I: '', ''
O: true

assumptions:
	- proper input: string

approaches:
  1. 3 if statements
  	1 - edit - same lengths
    	- have a flag for change
    2 - insert - 1st shorter than 2nd
    	- 2 pointers
    3 - remove - 2nd shorter than 1st
    	- 2 pointers
    else return false
    
	2. create `shorter` variable and `longer` variable
  	have two pointers for all
    
*/

console.log(oneEditAway('hellee', 'hello'));

function oneEditAway(str1, str2) {

	// check lengths
  if (Math.abs(str1.length - str2.length) > 1) return false;

  let longer = str1.length > str2.length ? str1 : str2;
  let shorter = longer === str1 ? str2 : str1;

  let longerPtr = 0;
  let shorterPtr = 0;
  let flag = false;
  
  while (shorterPtr < shorter.length && longerPtr < longer.length) {

    if (longer[longerPtr] !== shorter[shorterPtr]) {
      if (flag) return false;
      flag = true;
      if (longer.length > shorter.length) longerPtr += 1;
    } else {
      longerPtr += 1;
      shorterPtr += 1;
    }
  }

  return true;
}