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
  const dnsArr = domains.reduce((acc, domain) => {
    acc.push(domain);

    while (domain.includes('.')) {
      domain = domain.slice(domain.indexOf('.') + 1);
      acc.push(domain);
    }

    return acc;
  }, []);

  const dnsReversArr = dnsArr.map((elem) => elem.split('.').reverse().map((el) => `.${el}`).join(''));

  const res = dnsReversArr.reduce((acc, elem) => {
    acc[elem] = elem in acc ? acc[elem] += 1 : acc[elem] = 1;
    return acc;
  }, {});

  return res;
}
