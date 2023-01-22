function restoreIpAddresses(s: string): string[] {
  const res: string[] = [];
  dfs([], 0);
  return res;

  function dfs(prefix: number[], idx: number) {
    if (prefix.length === 4 && idx === s.length) {
      res.push(prefix.join("."));
      return;
    }

    if (prefix.length === 4 || idx === s.length) {
      return;
    }

    for (let r = idx; r < s.length; r++) {
      if (r !== idx && s[idx] === "0") return;

      const num = parseInt(s.slice(idx, r + 1));
      if (num > 255) {
        return;
      }
      prefix.push(num);
      dfs(prefix, r + 1);
      prefix.pop();
    }
  }
}
