const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
// function getMatrixElementsSum(/* matrix */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

module.exports = {
  getMatrixElementsSum
};

// !====================

function getMatrixElementsSum(matrix) {
  let res = 0;

  for (let col = 0; col < matrix[0].length; col += 1) {
    let row = 0;

    while (row < matrix.length && matrix[row][col] !== 0) {
      res += matrix[row][col];
      row += 1;
    }
  }

  return res;
}

// !====================
