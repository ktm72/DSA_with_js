function kmp(pattern, txt) {
  const n = txt.length,
    m = pattern.length;
  //create a pattern size array
  const lps = new Array(m).fill(0);
  computeLpsArr(pattern, m, lps);
  let i = 0,
    j = 0; //pointers
  while (i < n) {
    if (txt[i] === pattern[j]) {
      i++;
      j++;
    } else {
      //if j<=0 we can't find lps of -1
      if (j !== 0) {
        //lps keeps tracking the prefix index
        j = lps[j - 1];
      }
      //increase text pointer, j remains same
      i++;
    }
    //j = m -1 maybe, matched pattern
    if (j === m) {
      console.log(i - j);
      j = lps[j - 1];
    }
  }
}

function computeLpsArr(pat, m, lps) {
  //len pointer tracks prefix
  let len = 0,
    i = 1;
  lps[0] = 0;
  while (i < m) {
    if (pat[i] === pat[len]) {
      //set index in lps arr
      lps[i] = len + 1;
      //move both pointer
      len++;
      i++;
    } else {
      //mismatch
      if (len !== 0) {
        len = lps[len - 1];
      } else {
        //mismatch point 0
        lps[i] = 0;
        //move pointer
        i++;
      }
    }
  }
}

kmp("abs", "asdkdkabsd");
