function isAnagram(s, t) {
  const n = s.length,
    m = t.length;
  if (n !== m) return false;
  const count = new Array(26).fill(0);
  for (let i = 0; i < n; i++) {
    count[s.charCodeAt(i) - 97]++;
    count[t.charCodeAt(i) - 97]--;
  }
  for (let i = 0; i < m; i++) {
    if (count[t.charCodeAt(i) - 97] !== 0) return false;
  }
  return true;
}

console.log(isAnagram("anaa", "naaa"));
