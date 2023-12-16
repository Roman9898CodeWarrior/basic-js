const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

function createDreamTeam(members) {
  let teamName = [];
  if (Array.isArray(members)) {
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === "string") {
        teamName.push(Array.from(members[i].trimStart())[0]);
      }
    }
  } else {
    return false;
  }
  return teamName.sort().join("").toUpperCase();
}

// console.log(createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]));

module.exports = {
  createDreamTeam,
};
