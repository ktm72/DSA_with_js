// function findWinners(matches) {
//   const hash = matches.reduce((res, [winner, loser]) => {
//     if (!res[winner]) {
//       res[winner] = 0;
//     }

//     if (!res[loser]) {
//       res[loser] = 0;
//     }

//     res[loser]++;

//     return res;
//   }, {});

//   return Object.keys(hash).reduce(
//     (res, x) => {
//       const count = hash[x];

//       if (count === 0) {
//         res[0].push(x);
//       } else if (count === 1) {
//         res[1].push(x);
//       }

//       return res;
//     },
//     [[], []]
//   );//O(n)
// }
function findWinners(matches) {
  const zeroLoss = {};
  const oneLoss = {};
  const moreLosses = {};

  for (let i = 0; i < matches.length; i++) {
    const winner = matches[i][0];
    const loser = matches[i][1];

    // Add winner
    if (!moreLosses[winner] && !oneLoss[winner]) {
      zeroLoss[winner] = true;
    }

    // Add or move loser
    if (zeroLoss[loser]) {
      delete zeroLoss[loser];
      oneLoss[loser] = true;
    } else if (oneLoss[loser]) {
      delete oneLoss[loser];
      moreLosses[loser] = true;
    } else if (moreLosses[loser]) {
      continue;
    } else {
      oneLoss[loser] = true;
    }
  }

  const sortedZeroLosses = Object.keys(zeroLoss).sort((a, b) => a - b);
  const sortedOneLosses = Object.keys(oneLoss).sort((a, b) => a - b);
  return [sortedZeroLosses, sortedOneLosses]; // O(nlogn)
}

console.log(
  findWinners([
    [1, 3],
    [2, 3],
    [3, 6],
    [5, 6],
    [5, 7],
    [4, 5],
    [4, 8],
    [4, 9],
    [10, 4],
    [10, 9],
  ])
);
