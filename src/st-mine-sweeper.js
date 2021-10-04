import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
  const arr = [];
  for (let y = 0; y < matrix.length; y++) {
    arr.push([]);
    for (let x = 0; x < matrix[y].length; x++) {
      let counter = 0;
      for (let ny = y - 1; ny < y + 2; ny++) {
        if (!(ny < 0 || ny > matrix.length - 1)) {
          for (let nx = x - 1; nx < x + 2; nx++) {
            if (!(nx < 0 || nx > matrix[ny].length - 1)) {
              if (!(nx === x && ny === y)) {
                if (matrix[ny][nx] === true) {
                  counter++;
                }
              }
            }
          }
        }
      }
      arr[y].push(counter);
    }
  }
  return arr;
}

