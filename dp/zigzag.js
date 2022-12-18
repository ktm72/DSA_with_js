function zigZagconvert(s, numRows) {
  if (numRows === 1) return s;
  // let res = "", len = s.length
  // for(let r = 0; r< numRows; r++){
  //     let inc = 2*(numRows-1);//cycle
  //     //j = r + cycle*k, k = 0, 1, 2,
  //     //secondJ = (i + cycle) - 2*r
  //     for(let i=r; i<len; i+=inc){
  //         res+=s[i];//1st and last row
  //         let restCh= i + inc - (2*r);//other char index
  //         if(r>0 && r<numRows -1 && restCh < len){
  //             res+=s[restCh];//middle rows are V shaped
  //         }
  //     }
  // }
  // return res;
  //O(n)
  let step = 1;
  let rows = new Array(numRows).fill(""),
    idx = 0;
  for (let i = 0; i < s.length; i++) {
    rows[idx] += s[i];
    if (idx === 0) step = 1;
    else if (idx === numRows - 1) step = -1; //change direction
    idx += step;
  }
  return rows.join("");
}
console.log(zigZagconvert("abcdefghijk", 3));

// take the str "PAYPALISHIRING" for example:
// We start with variable index with the value 0, step with the value 1
// Each row added with the next char
// If we reach the bottommost row, we need to turn to the next above row, so we change the step value to -1
// we keep the step value until we reach topmost row. DON'T CHANGE IT!
// Again, if we reach the topmost row, we need to reset the step value to 1
// What we need to remember is:
// the zigzag pattern is just a pictorial image for us to have a better understanding
// What the trick of algorithm is actually add the next char of the given string to different rows.
// Don't really think how to move the cursor in the matrix.
// It's really misleading way you think of this. Even it works, it's not efficient.
