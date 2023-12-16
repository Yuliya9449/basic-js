const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
// class VigenereCipheringMachine {
//   encrypt() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
//   decrypt() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
// }

// module.exports = {
//   VigenereCipheringMachine
// };

//!------------------

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.message = null;
    this.key = null;
  }

  checkArguments() {
    if (!this.message || !this.key) {
      throw new Error('Incorrect arguments!');
    }
  }

  //делаем заглавные буквы и выравниваем длину сообщения и ключа
  toUpperCaseAndAlignLength() {
    this.message = this.message.toUpperCase();
    this.key = this.key.padEnd(this.message.length, this.key).toUpperCase();
  }

  // метод для шифрования
  encrypt(message, key) {
    this.message = message;
    this.key = key;

    this.checkArguments();

    this.toUpperCaseAndAlignLength();

    let res = '';

    for (let i = 0, j = 0; i < this.message.length; i += 1) {
      if (this.alphabet.includes(this.message[i])) {
        const resultingIndex = (
          this.alphabet.indexOf(this.message[i]) + this.alphabet.indexOf(this.key[j])
        );

        res += this.alphabet[resultingIndex];
        j += 1;
      }

      if (!this.alphabet.includes(this.message[i])) {
        res += this.message[i];
      }
    }

    // если в direct передали false, то переворачиваем res
    if (!this.direct) {
      res = res.split('').reverse().join('');
    }

    return res;
  }

  // метод для расшифровки
  decrypt(message, key) {
    this.message = message;
    this.key = key;

    this.checkArguments();

    this.toUpperCaseAndAlignLength();

    let res = '';

    for (let i = 0, j = 0; i < this.message.length; i += 1) {
      if (this.alphabet.includes(this.message[i])) {
        const resultingIndex = (
          this.alphabet.lastIndexOf(this.message[i]) - this.alphabet.indexOf(this.key[j])
        );

        res += this.alphabet[resultingIndex];
        j += 1;
      }

      if (!this.alphabet.includes(this.message[i])) {
        res += this.message[i];
      }
    }

    // если нужно перевернуть
    if (!this.direct) {
      res = res.split('').reverse().join('');
    }

    return res;
  }
}

module.exports = {
  VigenereCipheringMachine
};