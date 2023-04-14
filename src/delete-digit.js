const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
// function deleteDigit(/* n */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

module.exports = {
  deleteDigit
};

//!-----------------------

function deleteDigit(n) {
    let res = [];
    let arr = n.toString().split('');
    arr.forEach((elem, i) => {
        let copyArr = arr.slice();
        delete copyArr[i];
        res.push(copyArr);
    });
    res.forEach((el, i, ar) => {
        ar[i] = (+el.join(''));
    })
    res = Math.max.apply(null, res);
    return res;
}
