function myAtoi(s) {
  const len = s.length,
    max = 2 ** 31 - 1,
    min = -(2 ** 31);
  // let i:number =0, res:number =0, negative:number = 1;//negative = sum_sign   = false
  // //whitespace
  // while(i<len && s[i] === ' '){ i++;}
  // //+,- symbol
  // if(i<len && s[i]==='-'){
  //     i++;
  //     negative = -1;
  // } else if ( i<len && s[i]==='+') {i++;}
  // //check number
  // let checker = new Set(['0','1','2','3','4','5','6','7','8','9'])
  // while(i<len && checker.has(s[i])){
  //     res = res*10 + parseInt(s[i]);
  //     i++;
  // }
  // res = res*negative;
  // //max/min check
  // return res < 0 ? Math.max(res, min) : Math.min(res, max);
  //   const isInt32 = (num) => num < max && num > min;
  const testNumber = parseInt(s);
  if (isNaN(testNumber)) return 0;
  if (isInt32(testNumber)) return testNumber;
  return testNumber >= max ? max : min;
  //   let s_int = Math.min(Math.max(testNumber, min), max);
  //   return isNaN(s_int) ? 0 : s_int;
}
