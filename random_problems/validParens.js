var isValid = function (s) {
  //   const stack = [];
  //   const parens = "() {} []";
  //   let i = 0;
  //   while (i < s.length) {
  //     stack.push(s[i]);
  //     let open = stack[stack.length - 2];
  //     let close = stack[stack.length - 1];
  //     let potParens = open + close;
  //     if (parens.includes(potParens)) {
  //       stack.pop();
  //       stack.pop();
  //     }
  //     i++;
  //   }
  //   return stack.length === 0;
  const brackets = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (brackets[s[i]]) {
      stack.push(brackets[s[i]]);
    } else if (s[i] != stack.pop()) {
      return false;
    }
  }
  return !stack.length;
};
