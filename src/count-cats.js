const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
// function countCats(/* matrix */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

module.exports = {
  countCats
};
//!-------------------------------------------------------------

function countCats(matrix) {
    const cat = '^^';
    let n = 0;
    matrix.flat().forEach(elem => {
        if (elem === cat) {
            n += 1;
        }
    })
    return n;
  }