const permute = (nums) => {
  const len = nums.length;
  const res = [];
  const set = new Set();
  backtrack([], set);
  return res;
  function backtrack(cur, set) {
    if (cur.length === len) return res.push(cur);
    for (let i = 0; i < len; i++) {
      const num = nums[i];
      if (set.has(num)) continue;
      set.add(num);
      backtrack([...cur, num], set);
      set.delete(num);
    }
  }
};
