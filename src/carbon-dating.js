const { NotImplementedError } = require('../extensions/index.js');

// const MODERN_ACTIVITY = 15;
// const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
// function dateSample(/* sampleActivity */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

module.exports = {
  dateSample
};
//!==========================

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;


// формула получилась (t полураспада = ln2/k) -это из интенета, k типа коэффициент
// отсюда (k = ln2/t полураспада), т.е. (k = ln2/HALF_LIFE_PERIOD)
// (возраст образца = (ln(MODERN_ACTIVITY/sampleActivity))/k) sampleActivity приходит параметром функции
// округлить нужно в большую сторону

function dateSample(sampleActivity) {
  if (
    (typeof (sampleActivity) === 'string')
    && (+sampleActivity > 0)
    && (+sampleActivity <= MODERN_ACTIVITY)
  ) {
    const numSampleActivity = +sampleActivity;
    const k = Math.LN2 / HALF_LIFE_PERIOD;
    const old = Math.ceil(Math.log(MODERN_ACTIVITY / numSampleActivity) / k);

    return old;
  }

  return false;
}

// dateSample('6.555955979600091');
