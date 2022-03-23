/**
 * @function reverseWords
 * @param {string} str
 *
 * @example
 *  reverseWords("hello world")
 *  => world hello
 */

function reverseWords(str) {
  return str.trim().split(/\s+/).reverse().join(" ");
}

console.log(reverseWords("Sample     test     message    "));
