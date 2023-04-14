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

    const arr = [[1, str[0]]];
    let j = 0;  // counter index for arr

    for (let i = 1; i < str.length; i += 1) {
	    if (str[i] !== arr[j][1]) {
	    	j += 1;
	    	arr[j] = [1, str[i]];
	    } else {
	    	arr[j][0] += 1;
	    }
    }
    arr.forEach(elem => {
        if (elem[0] == 1) {
            elem.shift();
        }
    })
    arr.forEach((elem, i, arr) => {
        arr[i] = (elem.join(''));
    })
    let res = arr.join('')
    return res;
}