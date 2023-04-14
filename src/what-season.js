const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
// function getSeason(/* date */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

module.exports = {
  getSeason
};
 //!-------------------------

 function getSeason(date) {
    if (!date) {
        return 'Unable to determine the time of year!';
    }
    if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0 ) {
        throw new Error('Invalid date!');
    }
    let season = {
        spring: 'spring',
        summer: 'summer',
        autumn: 'autumn',
        winter: 'winter',
    }
    let month = date.getMonth();
    if (month === 2 || month === 3 || month === 4) {
        return season.spring;
    } else if (month === 5 || month === 6 || month === 7) {
        return season.summer;
    } else if (month === 8 || month === 9 || month === 10) {
        return season.autumn;
    } else {
        return season.winter;
    }
  }