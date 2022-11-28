var isPalindrome = function (x) {
  if (x < 0 || (x % 10 == 0 && x != 0)) {
    return false;
  }
  //   let nx = x.toString().split("").reverse().join("");
  //   let nx = "",
  //     val = x.toString();
  //   for (let i = val.length - 1; i >= 0; i--) {
  //     nx += val[i];
  //     console.log(nx);
  //   }
  //   return x === parseInt(nx); O(n)
  let reverse = 0;
  while (x > reverse) {
    reverse = reverse * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return x === reverse || x === Math.floor(reverse / 10); //O(log10(n))
};
console.log(isPalindrome(11));
console.log(isPalindrome(121));
