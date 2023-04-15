const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
// function minesweeper(/* matrix */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

module.exports = {
  minesweeper
};


//!---------------------
// let matrix = [
//     [true, false, false],
//     [false, true, false],
//     [false, false, false],
//   ];

        // [1, 2, 1],
        // [2, 1, 1],
        // [1, 1, 1], считаем true

function minesweeper(matrix) {
    let res = [[], [], []];
    res = matrix.map((elem, i) => {
        res[i] = [];
        return res[i];
    })
    for (let i = 0; i < matrix.length; i += 1) {
        for(let j = 0; j < matrix[i].length; j += 1) {
            res[i][j] = 0;
            if (matrix[i-1] && matrix[j-1] && matrix[i-1][j-1] === true) {
                res[i][j] += 1;
            }
            if (matrix[i-1] && matrix[j] && matrix[i-1][j] === true) {
                res[i][j] += 1;
            }
            if (matrix[i-1] && matrix[j+1] && matrix[i-1][j+1] === true) {
                res[i][j] += 1;
            }
            if (matrix[i] && matrix[j-1] && matrix[i][j-1] === true) {
                res[i][j] += 1;
            }
            if (matrix[i] && matrix[j+1] && matrix[i][j+1] === true) {
                res[i][j] += 1;
            }
            if (matrix[i+1] && matrix[j-1] && matrix[i+1][j-1] === true) {
                res[i][j] += 1;
            }
            if (matrix[i+1] && matrix[j] && matrix[i+1][j] === true) {
                res[i][j] += 1;
            }
            if (matrix[i+1] && matrix[j+1] && matrix[i+1][j+1] === true) {
                res[i][j] += 1;
            }
        }
    }
    // console.log(res);
    return res;
  }

//   minesweeper(matrix);