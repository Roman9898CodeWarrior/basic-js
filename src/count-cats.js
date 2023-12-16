const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let res = 0;
  for (let index = 0; index < matrix.length; index++) {
    if (matrix[index].includes("^^")) {
      let arr = matrix[index];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "^^") {
          res += 1;
        }
      }
    }
  }
  return res;
}

console.log(
  countCats([
    [0, 1, "^^", "^^"],
    [0, "^^", 2],
    ["^^", 1, 2],
  ])
);

module.exports = {
  countCats,
};
