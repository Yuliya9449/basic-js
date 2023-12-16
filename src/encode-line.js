const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
// function encodeLine(/* str */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

module.exports = {
  encodeLine
};

//!----------------------

function encodeLine(str) {
  const arr = str.split('')
    .reduce((acc, elem, idx) => {
      if (idx === 0) {
        acc.push(Array.from(elem));
      }

      if (idx > 0) {
        elem === acc[acc.length - 1][0]
          ? acc[acc.length - 1].push(elem)
          : acc.push(Array.from(elem));
      }

      return acc;
    }, []);

  return arr.map((nestedArr) => `${nestedArr.length}${nestedArr[0]}`)
    .join('')
    .replaceAll('1', '');
}
