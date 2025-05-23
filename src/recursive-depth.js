const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
// class DepthCalculator {
//   calculateDepth(/* arr */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
// }

// !====================

class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) { // выход из рекурсии
      return 0;
    }

    return 1 + arr.reduce((acc, elem) => Math.max(acc, this.calculateDepth(elem)), 0);
  }
}

// !====================

module.exports = {
  DepthCalculator
};
