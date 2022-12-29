function canConstruct(s, wordBank, memo = {}) {
  if (s in memo) return memo[s];
  if (s === "") return true;
  for (let word of wordBank) {
    //check substr is a prefix of that s
    if (s.indexOf(word) === 0) {
      const suffix = s.slice(word.length); //rest of the str
      if (canConstruct(suffix, wordBank, memo) === true) {
        //suffix become str for this call
        //so, memoing suffix or str is same
        memo[suffix] = true;
        return true;
      }
    }
  }
  memo[s] = false;
  return false;
}

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); //true
console.log(canConstruct("", ["cat", "abc", "cd"])); //true
console.log(
  canConstruct("scateboard", ["sc", "sca", "ate", "bo", "boar", "rd"])
); //false
console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
  ])
); //false
