/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.slice('');
  let res = '';
  let counter = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      counter++;
    } else if (counter !== 1) {
      res += counter + arr[i];
      counter = 1;
    } else {
      res += arr[i];
    }
  }

  return res;
}

module.exports = encodeLine;
