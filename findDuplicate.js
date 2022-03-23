/**
 * @function findDuplicate
 * @param {array} arr
 */

function findDuplicate(arr) {
  const sets = new Set();
  const duplicates = [];
  for (const item of arr) {
    if (sets.has(item)) {
      duplicates.push(item);
    } else {
      sets.add(item);
    }
  }
  return duplicates;
}

const data = [1, 2, 3, 4, 1, 5, 7, 6, 2, 9, 3, 9, 0];

console.log(`Duplicate Items: ${findDuplicate(data)}`);
