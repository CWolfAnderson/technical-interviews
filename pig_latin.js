// Write a function inPigLatin(sentence) that translates a sentence into its pig
// latin equivalent. The rules for the translation are as follows:
// 
// 1) For words that begin with consonants, all letters before the initial
// vowel are placed at the end of the word sequence. Then, "ay" is added to the end.
// Examples:
// "pig" → "igpay"
// "banana" → "ananabay"
// "trash" → "ashtray
// 
// 2) For words that begin with vowels, just add "yay" to the end
// Examples:
// "eat" → "eatyay"
// "omelet" → "omeletyay"
// "are" → "areyay"
// 
// !!! Words that were originally caplitalized must remained caplitalized
// !!! Assume no punctuation
// !!! 'y' is not a vowel
// 
// Examples:
// > inPigLatin("Shmanthony is the best teacher")
// Anthonyshmay isyay ethay estbay eachertay
// 
// > inPigLatin("let us Dance")
// etlay usyay Anceday
// 
// > inPigLatin("this is the time of my life")
// isthay isyay ethay imetay ofyay myay ifelay

function inPigLatin(sentence) {
  let sentArr = sentence.split(' ');
  
  sentArr.forEach(function(word) {
      if (isVowel(word[0])) {
        word += 'yay';
      } else {
        let sequence = '';
        for (let i = 0; i < word.length; i++) {
          let letter = word[0];
          if (isVowel) {
            // TODO: finish
          }
        }
        word += 'ay';
      }
  });
  
}

function isVowel(letter) {
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];    
  return vowels.indexOf(letter) >= 0;
}