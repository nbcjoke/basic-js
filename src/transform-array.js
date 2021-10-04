import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (arr === undefined || arr.constructor != Array)
    throw Error();
  let transformedarr = [];
  let flag;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '--discard-next') {
      if (arr[i + 1] !== undefined) {
        i++
        flag = true;
      }
    } else if (arr[i] === '--discard-prev') {
      if (arr[i - 1] !== undefined && flag === false) {
        transformedarr.pop()
        flag = false;
      }
    } else if (arr[i] === '--double-next') {
      if (arr[i + 1] !== undefined) {
        transformedarr.push(arr[i + 1])
        flag = false;
      }
    } else if (arr[i] === '--double-prev') {
      if (arr[i - 1] !== undefined && flag === false)
      transformedarr.push(transformedarr[transformedarr.length - 1])
    } else {
      transformedarr.push(arr[i])
      flag = false;
    }
  }
  return transformedarr;
};
