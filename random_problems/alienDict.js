/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  if (words.length === 1) return true;
  let map = {};
  //map char with order position
  for (let i = 0; i < order.length; i++) {
    map[order.charCodeAt(i) - "a".charCodeAt(0)] = i;
  }
  //compare each word with next word
  for (let i = 1; i < words.length; i++) {
    if (compare(words[i - 1], words[i], map) === false) return false;
  }
  return true;
};

const compare = (a, b, map) => {
  let minLength = Math.min(a.length, b.length);
  for (let i = 0; i < a.length, i < b.length; i++) {
    let aChar = a.charCodeAt(i) - "a".charCodeAt(0),
      bChar = b.charCodeAt(i) - "a".charCodeAt(0);
    //check sorted order
    if (map[aChar] < map[bChar]) return true;
    if (map[aChar] > map[bChar]) return false;

    // is a smaller?
    if (i === minLength - 1) {
      return a.length <= b.length;
    }
  }
};
