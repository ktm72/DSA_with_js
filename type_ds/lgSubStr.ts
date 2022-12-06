function lengthOfLongestSubstring(s: string): number {
  let len: number = s.length;
  if (len === 1) return 1;
  const cache: { [key: string]: number } = {};
  // sliding window technic
  // let left: number = 0,
  //   res: number = 0;
  // for (let i = 0; i < len; i++) {
  //   while (s[i] in cache) {
  //     delete cache[s[left]];
  //     left += 1;
  //   }
  //   cache[s[i]] = s[i];
  //   res = Math.max(res, i - left + 1);
  // }
  // return res;
  let start: number = 0,
    maxLen: number = 0;
  for (let i = 0; i < len; i++) {
    const ch = s[i];
    if (cache[ch] >= start) start = cache[ch] + 1;
    cache[ch] = i;
    maxLen = Math.max(maxLen, i - start + 1);
  }
  return maxLen; //better
}
