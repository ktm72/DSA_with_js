var longestPalindrome = function (s) {
  // let maxPal = "";
  let len = s.length;
  let start = 0,
    end = 0;

  for (let i = 0; i < len; i++) {
    let [l1, len1] = findPalindrome(i, i); // odd palindrome
    let [l2, len2] = findPalindrome(i, i + 1); // even palindrome
    if (len1 - l1 > end - start) {
      start = l1;
      end = len1;
    }
    if (len2 - l2 > end - start) {
      start = l2;
      end = len2;
    }
  }

  return s.substring(start, end + 1);

  function findPalindrome(left, right) {
    //loop until left becomes -1
    while (left >= 0 && right < len && s[left] === s[right]) {
      //maxPal >= window size means it already has this part
      // sliding window, (windowEnd - windowStart + 1)
      // if (maxPal.length < right - left + 1) {
      //   maxPal = s.slice(left, right + 1)
      // }
      left--;
      right++;
    }
    //after while loop ends, left becomes -1
    //[start, substr_length]
    return [left + 1, right - 1];
  }
};
// console.log(longestPalindrome("babad"));
console.log(longestPalindrome("abb"));
