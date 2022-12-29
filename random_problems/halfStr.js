// function halfstr() {
//   const re = /[aeiou]/gi;
//   return (s) => {
//     if (s.length === 0) return false;
//     const mid = Math.floor(s.length / 2);

//     const leftStr = s.slice(0, mid).match(re, "");
//     const rightStr = s.slice(mid).match(re, "");
//     if (rightStr == null && leftStr == null) return true;
//     if (!rightStr || !leftStr) return false;
//     return leftStr.length === rightStr.length;
//   };
// }
// const halvesAreAlike = halfstr();

// function halvesAreAlike(s) {
//   if (s.length === 0) return false;
//   const mid = Math.floor(s.length / 2);
//   const leftStr = s.slice(0, mid);
//   const rightStr = s.slice(mid);
//   return check(leftStr, rightStr);
// }

// const check = (s1, s2) => {
//   let n = s1.length;
//   let cnt1 = (cnt2 = 0);
//   for (let i = 0; i < n; i++) {
//     if (isvowel(s1[i])) cnt1++;
//     if (isvowel(s2[i])) cnt2++;
//   }
//   return cnt1 == cnt2;
// };
// const isvowel = (c) => {

//   if (
//     c == "a" ||
//     c == "e" ||
//     c == "i" ||
//     c == "o" ||
//     c == "u" ||
//     c == "A" ||
//     c == "E" ||
//     c == "I" ||
//     c == "O" ||
//     c == "U"
//   )
//     return true;
//   return false;
// };

const halvesAreAlike = (s) => {
  let strLen = s.length;
  if (strLen === 0) return false;
  let sum = 0;
  const vowels = new Set(["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"]);
  for (let i = 0; i < strLen / 2; i++) {
    console.log("left", vowels.has(s[i]));
    console.log("right", vowels.has(s[strLen - 1 - i]));
    sum += vowels.has(s[i]) - vowels.has(s[strLen - 1 - i]);
    console.log(sum);
  }
  return !sum;
};

console.log(halvesAreAlike("textbook"));
