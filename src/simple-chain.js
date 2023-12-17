const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
// const chainMaker = {
//   getLength() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   addLink(/* value */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   removeLink(/* position */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   reverseChain() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   finishChain() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
// };

// module.exports = {
//   chainMaker
// };

// !======================================

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value = '') {
    this.chain.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (this.chain[position - 1]) {
      this.chain.splice(position - 1, 1);
      return this;
    }

    if (!this.chain[position - 1]) {
      this.chain.length = 0;
      throw new Error("You can't remove incorrect link!");
    }
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    const result = this.chain.join('~~');
    this.chain.length = 0;
    return result;
  },
};

// !=============

module.exports = {
  chainMaker
};
