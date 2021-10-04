import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
 const arr = str.split('');
  const encoded = [];
  let count = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] !== arr[i] || i === arr.length - 1) {
      if (i === 0 || arr[i - 1] !== arr[i]) {
        encoded.push(arr[i]);
      } else {
        encoded.push(count);
        count = 1;
        encoded.push(arr[i]);
      }
    } else {
      count++;
    }
  }
  return encoded.join('');
}
