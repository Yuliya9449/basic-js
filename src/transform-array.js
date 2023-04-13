const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(/* arr */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  transform
};


//!==================

// '--discard-next'  '--discard-prev'  '--double-next'  '--double-prev'
// let arr = 5;
// output: [1, 2, 3, 4, 5]

function transform(arr) {
//! создаём объект ошибки
    if(!Array.isArray(arr)) {
        throw new Error("'arr' parameter must be an instance of the Array!")
    }

    if (arr.length === 0) {
        return arr;
    }
        const res = arr.slice();
    for (let i = 0; i <= res.length; i += 1) {

        if ((res[i] === '--discard-prev')) {
            delete res[i - 1];
            delete res[i];
        }
        if ((res[i] === '--discard-next')) {
            delete res[i];
            delete res[i + 1];
        }
        if ((res[i] === '--double-prev')) {
            res[i] = res[i - 1];
        }
        if ((res[i] === '--double-next')) {
            res[i] = res[i + 1];
        }
    };
    let noEmpty = res.filter(elem => elem);
    return noEmpty;
}
