/**
 *
 * @param {string} str
 * @return {string}
 *
 */
function isPalindrome(str) {
  let newString = '';
  str = String(str);
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }

  if (newString === str) {
    return console.log(true);
  }
  return console.log(false);
  // newString === str ? return true : return false;
}

isPalindrome('anna'); // ==> true
isPalindrome('walter'); // ==> false
isPalindrome(12321); // ==> true
isPalindrome(123456); // ==> false
