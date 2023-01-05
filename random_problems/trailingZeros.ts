function trailingZeros(n: number): number {
  if (n < 5) return 0;
  let count = 0,
    num = n;
  // Divide n by powers of 5 (e.g. 5, 25, 125, etc.)
  // and add the division result to count
  // until n is no longer divisible by a power of 5
  while (num >= 5) {
    count += Math.floor((num /= 5));
  }

  //   for (let i = 5; i <= n; i *= 5) count += Math.floor(n / i);
  return count;
}
