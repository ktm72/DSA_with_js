function rabinKarp(text, len) {
  // len is length of the duplicate string to search for/window size
  if (len === 0) return [false, ""];
  let mod = 2 ** 47 - 1; //mod to avoid overflow, should be prime number to avoid hash collision
  let size = text.length;
  const base = 26; // base is the number of characters in the input alphabet
  let most_sig_digit = 1; //is used to remove first char value in the text window hash
  let hashKey = 0; // hash value for text window

  let charArr = []; //char index num
  for (let i = 0; i < size; ++i) {
    charArr[i] = text[i].charCodeAt(0) - 97; //'a'.charCodeAt()=97
  }
  // value for most_sig_digit is base^(len-1) % mod
  for (let i = 0; i < len; i++) {
    // generate the most significat digit
    most_sig_digit = (most_sig_digit * base) % mod;
    // Calculate the hash value of the first window of text
    hashKey = (hashKey * base + charArr[i]) % mod;
  }

  // Store text window hash in set
  const seen = new Set();
  seen.add(hashKey);

  // sliding window to find duplicate string
  for (let i = len; i < size; i++) {
    // Compute rolling hash in O(1) time
    //this hash works for some
    // hashKey =
    //   (hashKey * base -
    //     ((charArr[i - len] * most_sig_digit) % mod) +
    //     base +
    //     charArr[i]) %
    //   base;
    // explanation
    //   hashKey *= base;
    //   // remove the first char
    //   hashKey -= (most_sig_digit * charArr[i - len]) % mod;
    //   hashKey += base;
    //   // add the next char
    //   hashKey = (hashKey + charArr[i]) % base;
    // hash = (hash * base - charArr[i - 1] * most_sig_digit) + charArr[i - 1 + len]; // without mod, if i=0
    //it works for most of the cases
    hashKey =
      (((hashKey * base - ((charArr[i - len] * most_sig_digit) % mod) + mod) %
        mod) +
        charArr[i]) %
      mod;
    if (seen.has(hashKey)) return [true, text.substring(i - len + 1, i + 1)];
    seen.add(hashKey);
  }
  return [false, ""];
}

function longestDupSubstring(s) {
  //RollingHash+Binary
  //   const size = s.length;
  //   let low = 0,
  //     high = size,
  //     ans = "";

  //   while (low < high) {
  //     const mid = ~~((low + high) / 2); // mid = repeating string length
  //     let [isFound, patternRepeated] = rabinKarp(s, mid);
  //     if (isFound) {
  //       low = mid + 1;
  //       ans = patternRepeated;
  //     } else {
  //       high = mid;
  //     }
  //   }
  //   return ans;
  //Brute force
  let ans = "",
    j = 1,
    len = s.length;
  for (let i = 0; i < len; i++) {
    let longest = s.slice(i, i + j);
    let temp = s.slice(i + 1);
    while (temp.includes(longest)) {
      ans = longest;
      j += 1;
      longest = s.slice(i, i + j);
    }
  }
  return ans;
}
longestDupSubstring("banana");
