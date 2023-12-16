const { NotImplementedError } = require("../extensions/index.js");

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
function transform(arr) {
  if (Array.isArray(arr)) {
    if (
      arr.includes("--discard-next") ||
      arr.includes("--discard-prev") ||
      arr.includes("--double-next") ||
      arr.includes("--double-prev")
    ) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "--discard-next") {
          let res = arr.slice(0, i) + "," + arr.slice(i + 2);
          return res;
        } else if (arr[i] === "--discard-prev") {
          let res = arr.slice(0, i - 1) + "," + arr.slice(i + 1);
          return res;
        } else if (arr[i] === "--double-next") {
          let res = arr.slice(0, i) + "," + arr[i + 1] + "," + arr.slice(i + 1);
          return res;
        } else if (arr[i] === "--double-prev") {
          let res = arr.slice(0, i) + "," + arr[i - 1] + "," + arr.slice(i + 1);
          return res;
        }
      }
    } else {
      let res = arr;
      return res;
    }
  } else {
    return new Error("'arr' parameter must be an instance of the Array!");
  }
}

// console.log(transform(23));

module.exports = {
  transform,
};
