var longestPalindrome = function (s) {
  let maxPal = "";
  let len = s.length;
  for (let i = 0; i < len; i++) {
    findPalindrome(i, i); // odd palindrome
    findPalindrome(i, i + 1); // even palindrome
  }
  return maxPal;

  function findPalindrome(left, right) {
    //loop until left becomes -1
    while (left >= 0 && right < len && s[left] === s[right]) {
      //maxPal >= window size means it already has this part
      if (maxPal.length < right - left + 1) {
        maxPal = s.slice(left, right + 1);
      }
      left--;
      right++;
    }
  }
};
console.log(longestPalindrome("babad"));
