function countConstruct(s, wordBank, memo = {}) {
  if (s in memo) return memo[s];
  if (s === "") return 1;
  let count = 0;
  for (let word of wordBank) {
    if (s.indexOf(word) === 0) {
      //   const suffix = s.slice(word.length); //rest of the str
      const numWays = countConstruct(s.slice(word.length), wordBank, memo);
      count += numWays;
    }
  }
  memo[s] = count;
  return count;
}

console.log(countConstruct("", ["cat", "abc", "cd"])); //1
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); //1
console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); //2
console.log(
  countConstruct("scateboard", ["sc", "sca", "ate", "bo", "boar", "rd"])
); //0
console.log(
  countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
); //4
console.log(
  countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
  ])
); //0
