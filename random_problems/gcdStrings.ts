/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
function gcdOfStrings(str1: string, str2: string): string {
  if (str1 + str2 !== str2 + str1) return "";
  const n: number = str1.length;
  const m: number = str2.length;

  const gcd = (x: number, y: number): number => {
    if (!y) return x;
    return gcd(y, x % y);
  };
  const div: number = gcd(n, m);
  // while (m !== 0) {
  //   let t = m;
  //   m = n % m;
  //   n = t;
  // }
  // return str1.slice(0, n);
  return str1.slice(0, div);
}
console.log(gcdOfStrings("ABCABC", "ABC")); //ABC
