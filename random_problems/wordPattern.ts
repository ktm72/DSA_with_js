function wordPattern(pattern: string, s: string): boolean {
  const words: string[] = s.split(" ");
  const n: number = words.length;
  if (pattern.length !== n) return false;
  let charToWord = new Map<string, string>();
  // let wordToChar = new Map<string, string>();
  // for (let i = 0; i < n; i++) {
  //   const w: string = words[i];
  //   const p: string = pattern[i];
  //   if (charToWord.has(p) && charToWord.get(p) !== w) {
  //     return false;
  //   } else if (!charToWord.has(p) && wordToChar.get(w)) {
  //     return false;
  //   }
  //   charToWord.set(p, w);
  //   wordToChar.set(w, p);
  // }
  const seen = new Set<string>();
  for (let i = 0; i < n; i++) {
    const w: string = words[i];
    const p: string = pattern[i];
    if (!charToWord.has(p)) {
      //w linked to another p
      if (seen.has(w)) return false;
      charToWord.set(p, w);
      seen.add(w);
    } else {
      if (charToWord.get(p) !== w) return false;
    }
  }
  return true;
}

console.log(wordPattern("abba", "dog cat cat dog")); //true
console.log(wordPattern("abba", "dog cat cat fish")); // false
console.log(wordPattern("aaaa", "dog cat cat dog")); //false
console.log(wordPattern("abc", "b a c ")); //true
