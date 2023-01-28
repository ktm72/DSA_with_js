/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function (words) {
  const set = new Set(words);
  const memo = new Map();
  const result = [];

  function dfs(word) {
    if (memo.has(word)) return memo.get(word);
    let prfx = "";
    for (let i = 0; i <= word.length; i++) {
      prfx += word[i];
      const suffix = word.substring(i + 1);
      if (set.has(prfx) && (set.has(suffix) || dfs(suffix))) {
        memo.set(word, true);
        return true;
      }
    }

    memo.set(word, false);
    return false;
  }

  for (const word of words) {
    if (dfs(word)) result.push(word);
  }

  return result;
};

////

var findAllConcatenatedWordsInADict = function (words) {
  const set = new Set(words);
  let res = [];

  let dfs = (word) => {
    const len = word.length;
    if (len == 0) return true;
    let prf = "";
    for (let i = 0; i <= len; i++) {
      prf += word[i];
      if (set.has(prf) && dfs(word.slice(i + 1))) {
        return true;
      }
    }
    return false;
  };

  for (let word of words) {
    set.delete(word);
    if (dfs(word)) res.push(word);
    set.add(word);
  }
  return res;
};
