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

//A-65, B-66, ... Z-90

 class VigenereCipheringMachine {
    constructor(direct = true) {
        this.direct = direct;
    }
    //делаем заглавные буквы и выравниваем длину сообщения и ключа
    toUpperCaseAndAlignLength(message, key) {
        let normMess = message;
        let normKey = key;
        while(normKey.length < normMess.length) {
            normKey += key;
        }
        normKey = normKey.slice(0, normMess.length).toUpperCase();
        normMess = normMess.toUpperCase();
        //! ура я победила деструктуризацию
        return ([normMess, normKey]);
    }
    // метод для шифрования
    encrypt(message, key) {
        if ([...arguments].length < 2 || typeof(message) == 'undefined' || typeof(key) == 'undefined') {
            throw new Error('Incorrect arguments!')
        }
        let res = '';

        let [normMess, normKey] = this.toUpperCaseAndAlignLength(message, key);
        //! теперь у меня есть normMess и normKey
        // console.log([normMess, normKey]);
        // console.log(normMess);//'ATTACK AT DAWN!'
        // console.log(normKey);//'ALPHONSEALPHONS'

        //! вывожу формулу
        //26 - т.к. 26 букв
    // let letter = String.fromCharCode(((normMess.charCodeAt(1) - 65) + (normKey.charCodeAt(1) - 65)) % 26 + 65);
        // console.log(letter);

        //! i- индекс для normMess, j - индекс для normKey
        for (let i = 0, j = 0; i < normMess.length; i += 1) {
            if(normMess.charCodeAt(i) >= 65 && normMess.charCodeAt(i) <=90) {
                let letter = String.fromCharCode(((normMess.charCodeAt(i) - 65) + (normKey.charCodeAt(j) - 65)) % 26 + 65);
                res += letter;
                j += 1;
            } else {
                res += normMess[i];
            }
        }
        // если в direct передали false, то переворачиваем res
        if (!this.direct) {
            res = res.split('').reverse().join('');
        }
        console.log(res);
        return res;
    }


    // метод для расшифровки
    decrypt(message, key) {
        if ([...arguments].length < 2 || typeof(message) == 'undefined' || typeof(key) == 'undefined') {
            throw new Error('Incorrect arguments!')
        }
        let res = '';
        let [normMess, normKey] = this.toUpperCaseAndAlignLength(message, key);
        // console.log(normMess);
        // console.log(normKey);

        //! вывожу формулу
        //формулы получились разные, поэтому доп. if
    // let letter = String.fromCharCode(((normMess.charCodeAt(4) - 65) - (normKey.charCodeAt(4) - 65)) % 26 + 65);
    // console.log(normMess[4]);
        // console.log(normKey[4]);
        // console.log(letter);

        for (let i = 0, j = 0; i < normMess.length; i += 1) {
            if (normMess.charCodeAt(i) >= 65 && normMess.charCodeAt(i) <=90) {

                if (normMess.charCodeAt(i) >= normKey.charCodeAt(j)) {
                    let letter = String.fromCharCode(((normMess.charCodeAt(i) - 65) - (normKey.charCodeAt(j) - 65)) % 26 + 65);
                    res += letter;
                    j += 1;
                } else if (normMess.charCodeAt(i) < normKey.charCodeAt(j)) {
                    let letter = String.fromCharCode((26 - (Math.abs((normMess.charCodeAt(i) - 65) - (normKey.charCodeAt(j) - 65)))) % 26 + 65);
                    res += letter;
                    j += 1;
                }

            } else {
                res += normMess[i];
            }
        }
// если нужно перевернуть
        if (!this.direct) {
            res = res.split('').reverse().join('');
        }

        console.log(res);
        return res;
    }
  }


//   const directMachine = new VigenereCipheringMachine();

//   const reverseMachine = new VigenereCipheringMachine(false);
//   directMachine.encrypt('attack at dawn!', 'alphonse');//   =>'AEIHQX SX DLLU!'
// directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse');//=>'ATTACK AT DAWN!'
// reverseMachine.encrypt('attack at dawn!', 'alphonse'); //=>'!ULLD XS XQHIEA'
// reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'); //=>'!NWAD TA KCATTA'

// directMachine.decrypt('aEiHQX sx DllU!', 'alphonse');

// console.log(directMachine);
//node src/vigenere-cipher.js
//pm run test ./test/vigenere-cipher*





module.exports = {
    VigenereCipheringMachine
  };