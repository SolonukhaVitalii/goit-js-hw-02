/*Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

const findLongestWord = function(string) {
  // твой код
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
/*console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'*/
function findLongestWord (string = "") {
 let words = string.split(" ");
 let longestWord = words[0];
  for (const word of words) {
    const isLongest = word.length > longestWord.length;
    if (isLongest) {
      longestWord = word;
    }
  }
  return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'