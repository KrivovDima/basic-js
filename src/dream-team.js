const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  const arrStr = members.filter((item) => {
    return typeof item === 'string';
  }).map((item) => {
    let str = item.trim();
    return str[0].toUpperCase();
  })

  return arrStr.sort().join('');

 
};
