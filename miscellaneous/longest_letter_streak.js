// Write a function longestLetterStreak(str, searchLetters) that takes in 2 arguments:
// - str: A string of uppercase characters.
// - searchLetters: An array of uppercase single-character strings (i.e ["A", "F", "K"])
// 
// The function should return the length of the longest streak of letters (consecutive
// letters) in the `str` that are in the `searchLetters`.
// 
// Examples:
// longestLetterStreak("ACCA", ["C"]) => 2
// longestLetterStreak("YACCADCA", ["C", "A"]) => 4
// longestLetterStreak("ZTKZQRKKZ", ["Z", "K", "Y"]) => 3
// longestLetterStreak("YYYYY", ["Z", "K", "Y"]) => 5

function longestLetterStreak(str, searchLetters) {
  
  let currentStreak = 0;
  let longestStreak = 0;  
  
  str.split('').forEach(function(letter) {
    if (searchLetters.indexOf(letter) >= 0) {
      currentStreak += 1;
    } else {
      if (currentStreak > longestStreak) {
        longestStreak = currentStreak;
      }
      currentStreak = 0;
    }
  });
  
  return longestStreak > currentStreak ? longestStreak : currentStreak;
  
}