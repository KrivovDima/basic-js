const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  matrix.forEach(element => {
    for (let value of element) {
      if (value === '^^') {
        count++;
      }
    }
  });
  return count;

};
