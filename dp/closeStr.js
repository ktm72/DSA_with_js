function closeStrings(word1, word2) {
  if (word1.length !== word2.length) return false;

  // const eval = word => {
  //     let len = word.length, fm = new Uint32Array(26), vis = 0;
  //     for (let i = 0; i < len; i++) {
  //         let char = word.charCodeAt(i) - 97
  //         fm[char]++, vis |= 1 << char
  //     }
  //     return [len, vis, ...fm.sort((x,y) => x - y)].join(',')
  // }
  //return eval(word1) === eval(word2)
  let freq1 = new Array(26).fill(0),
    freq2 = new Array(26).fill(0);
  let a = "a".charCodeAt(),
    len = word1.length;
  for (let i = 0; i < len; i++) {
    freq1[word1.charCodeAt(i) - a]++;
    freq2[word2.charCodeAt(i) - a]++;
  }
  for (let i = 0; i < 26; i++) {
    if ((freq1[i] && !freq2[i]) || (!freq1[i] && freq2[i])) return false;
  }
  return (
    freq1.sort((a, b) => a - b).join("") ===
    freq2.sort((a, b) => a - b).join("")
  );
}
console.log(closeStrings("abbcb", "aabca"));
