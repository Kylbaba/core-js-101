/**
 * Complete the solution so that it reverses the string value passed into it.
 * https://www.codewars.com/kata/reversed-strings
 *
 * @param {string} str
 * @return {string}
 *
 */
function solution(str){
  let newString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

solution('world'); // returns 'dlrow'
solution('4321'); // returns 'dlrow'
