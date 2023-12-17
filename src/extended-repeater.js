const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
// function repeater(/* str, options */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

module.exports = {
  repeater
};

// !==========================

function repeater(str, options) {
  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|',
  } = options;

  const additionalStr = Array.from({ length: additionRepeatTimes })
    .fill(String(addition))
    .join(additionSeparator);

  const res = Array.from({ length: repeatTimes })
    .fill(String(str) + additionalStr)
    .join(separator);

  return res;
}
