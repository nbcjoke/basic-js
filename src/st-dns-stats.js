import { NotImplementedError } from '../extensions/index.js';

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
export default function getDNSStats(domains) {
  let arr = domains.map((item) => item.split('.').reverse());
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j !== 0) {
        arr[i][j] = `${arr[i][j - 1]}.${arr[i][j]}`;
      } else {
        arr[i][j] = `.${arr[i][j]}`;
      }
    }
  }
  arr = arr.flat();
  for (let k = 0; k < arr.length; k++) {
    if (!obj[arr[k]]) {
      obj[arr[k]] = 1;
    } else {
      obj[arr[k]] += 1;
    }
  }
  return obj;
}
