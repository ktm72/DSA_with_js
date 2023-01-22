const res = [],
  path = [];
backtrack(s);
return res;
function backtrack(str) {
  if (!str.length) {
    res.push(Array.from(path));
    return;
  }
  for (let i = 1; i <= str.length; i++) {
    const newStr = str.slice(0, i);
    if (!isPalindrome(newStr)) {
      continue;
    }
    path.push(newStr);
    backtrack(str.slice(i));
    path.pop(newStr);
  }
}
function isPalindrome(str) {
  let l = 0,
    r = str.length - 1;
  while (l < r) {
    if (str[l] != str[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
}
