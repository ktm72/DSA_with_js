function canConstruct(ransom, megazine) {
  if (ransom.length > megazine.length) return false;
  //   const count = new Array(26).fill(0);
  //   for (let i = 0; i < megazine.length; i++) {
  //     count[megazine.charCodeAt(i) - 97]++;
  //   }
  //   for (let i = 0; i < ransom.length; i++) {
  //     const idx = ransom.charCodeAt(i) - 97;
  //     if (!count[idx] || count[idx] <= 0) return false;
  //     count[idx]--;
  //   }// fast
  const cache = {};
  for (let i = 0; i < m.length; i++) {
    if (cache[megazine[i]]) {
      cache[megazine[i]]++;
    } else {
      cache[megazine[i]] = 1;
    }
  }
  for (let i = 0; i < ransom.length; i++) {
    if (!cache[ransom[i]] || cache[ransom[i]] <= 0) return false;
    cache[ransom[i]]--;
  }
  return true; //O(n*m)
}
console.log(canConstruct("aa", "aab"));
console.log(canConstruct("a", "b"));
