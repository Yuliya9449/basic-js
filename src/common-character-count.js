const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
// function getCommonCharacterCount(/* s1, s2 */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

module.exports = {
  getCommonCharacterCount
};

//!-------------------------

function getCommonCharacterCount(s1, s2) {
  let s2Remaining = s2;

  for (const char of s1) {
    if (s2Remaining.includes(char)) {
      s2Remaining = s2Remaining.replace(char, '');
    }
  }

  return s2.length - s2Remaining.length;
}
