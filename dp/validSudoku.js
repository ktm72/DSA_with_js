function isValidSudoku(board) {
  const set = new Set();

  let rowLen = board.length;
  let colLen = board[0].length;
  for (let r = 0; r < rowLen; r++) {
    for (let c = 0; c < colLen; c++) {
      const value = board[r][c];
      // let boxPos = [Math.floor(r/3), Math.floor(c/3)]; //co-ordinate checking is slow
      let boxNum = 3 * Math.floor(r / 3) + Math.floor(c / 3);
      if (value === ".") continue;
      const rowString = `${value} at row ${r}`;
      const colString = `${value} at col ${c}`;
      const boxString = `${value} at box ${boxNum}`;

      if (set.has(rowString) || set.has(colString) || set.has(boxString)) {
        return false;
      } else {
        set.add(rowString);
        set.add(colString);
        set.add(boxString);
      }
    }
  }
  return true;
}
