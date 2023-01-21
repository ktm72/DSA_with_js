function minFlipsMonoIncr(s: string): number {
  let num_flips = 0;
  let num_ones = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "1") {
      ++num_ones;
    } else if (num_ones > 0) {
      ++num_flips;
      --num_ones;
    }
  }
  return num_flips;
}
console.log(minFlipsMonoIncr("010110"));
