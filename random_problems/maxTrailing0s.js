var maxTrailingZeros = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  const suffixCols = [];

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      const num = grid[i][j];
      if (suffixCols[j] == null) suffixCols[j] = { 2: 0, 5: 0 };
      suffixCols[j]["2"] += getCount(num, 2);
      suffixCols[j]["5"] += getCount(num, 5);
    }
  }

  const prefixCols = [];
  for (let j = 0; j < n; ++j) {
    prefixCols[j] = { 2: 0, 5: 0 };
  }

  let maxZeros = 0;

  for (let i = 0; i < m; ++i) {
    const suffixRow = { 2: 0, 5: 0 };

    for (let j = n - 1; j >= 0; --j) {
      const num = grid[i][j];
      suffixRow["2"] += getCount(num, 2);
      suffixRow["5"] += getCount(num, 5);
    }

    let prefixRow = { 2: 0, 5: 0 };

    for (let j = 0; j < n; ++j) {
      const num = grid[i][j];

      const twoCount = getCount(num, 2);
      const fiveCount = getCount(num, 5);

      suffixRow["2"] -= twoCount;
      suffixCols[j]["2"] -= twoCount;

      suffixRow["5"] -= fiveCount;
      suffixCols[j]["5"] -= fiveCount;

      // down-right => prefixCol + suffixRow
      const downRight = calculateTrailingZeros(prefixCols[j], suffixRow, num);
      // down-left => prefixCol + prefixRow
      const downLeft = calculateTrailingZeros(prefixCols[j], prefixRow, num);
      // up-right => suffixCols + suffixRow
      const upRight = calculateTrailingZeros(suffixCols[j], suffixRow, num);
      // up-left => suffixCols + prefixRow
      const upLeft = calculateTrailingZeros(suffixCols[j], prefixRow, num);

      maxZeros = Math.max(maxZeros, downRight, downLeft, upRight, upLeft);

      prefixRow["2"] += twoCount;
      prefixCols[j]["2"] += twoCount;

      prefixRow["5"] += fiveCount;
      prefixCols[j]["5"] += fiveCount;
    }
  }

  return maxZeros;

  function calculateTrailingZeros(col, row, currNum) {
    let twosCount = 0;
    let fivesCount = 0;

    twosCount = row["2"] + col["2"];
    fivesCount = row["5"] + col["5"];

    twosCount += getCount(currNum, 2);
    fivesCount += getCount(currNum, 5);
    return Math.min(twosCount, fivesCount);
  }

  function getCount(num, divisor) {
    let count = 0;

    while (num % divisor === 0) {
      ++count;
      num /= divisor;
    }

    return count;
  }
};
