const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
// function getDNSStats(/* domains */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

module.exports = {
  getDNSStats
};

//!---------------------

function getDNSStats(domains) {

    let res = {};
    let myArr = domains.map(elem => {
        elem = elem.split('.');
        return elem;
    })

    myArr.forEach(elem => {
        while (elem.length > 0) {
            let key = `.${elem.pop()}`;
            if(!res[key]) {
                res[key] = 1;
            } else {
                res[key] += 1;
            }
            elem[elem.length - 1] += key;
        }
    });

    for (let key in res) {
        let newKey = (key.split('.').reverse());
        newKey.pop();
        if(newKey.length > 1) {
            newKey = `.${newKey.join('.')}`;
            res[newKey] = res[key];
            delete res[key];
        }
    }
    return res;
}
