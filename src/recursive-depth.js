import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
     calculateDepth(arr, depthNum, depth) {
    depthNum = depthNum || 1; 
    depth = depth || 1; 
     if (depth > depthNum) { 
       depthNum = depth; 
      }
     for(let i = 0; i < arr.length; i++) {
       let arrCurrent = arr[i];
       if(Array.isArray(arrCurrent)) {
        let temp = this.calculateDepth(arrCurrent, depthNum, depth + 1);
        if (temp > depthNum) {
          depthNum = temp;
        }
       
       }
     } 
   return depthNum;
  }
};
