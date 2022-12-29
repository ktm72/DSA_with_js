function allConstruct(s, wordBank, memo = {}) {
  if (s in memo) return memo[s];
  if (s === "") return [[]];

  let result = [];
  for (let word of wordBank) {
    if (s.indexOf(word) === 0) {
      const suffix = s.slice(word.length); //rest of the str
      const suffixWays = allConstruct(suffix, wordBank, memo);
      const targetWays = suffixWays.map((way) => [word, ...way]);
      result.push(...targetWays);
    }
  }
  memo[s] = result;
  return result;
}

console.log(allConstruct("hello", ["cat", "abc", "cd"])); //not possible -> []
console.log(allConstruct("", ["cat", "abc", "cd"])); //possible but empty ->[[]]
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); //[['abc','def']]
console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); //[['purp','le'], ['p','ur','p','le']]
console.log(
  allConstruct("scateboard", ["sc", "sca", "ate", "bo", "boar", "rd"])
); //[]
console.log(
  allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
); //4
console.log(
  allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
  ])
); //[]
