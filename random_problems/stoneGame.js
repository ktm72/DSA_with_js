var stoneGame = function (piles) {
  let p1 = 0,
    p2 = piles.length - 1;
  let alice = 0,
    bob = 0;
  while (p1 < p2) {
    //alice's turn
    if (piles[p1] > piles[p2]) {
      alice += piles[p1];
      p1 += 1;
    } else {
      alice += piles[p2];
      p2 -= 1;
    }
    //bob's turn
    if (piles[p1] > piles[p2]) {
      bob += piles[p1];
      p1 += 1;
    } else {
      bob += piles[p2];
      p2 -= 1;
    }
  }
  return p1 > p2 ? true : false;

  // let dp = new Map();
  // return dfs(0, piles.length -1) > 0;
  // function dfs(l, r){
  //     if(l > r) return 0;
  //     let key = l+','+r;
  //     if(dp.has(key)) return dp.get(key);
  //     const lPick = piles[l] + dfs(l+1, r);
  //     const rPick = piles[r] + dfs(l, r-1);
  //     dp.set(key, Math.max( lPick, rPick));
  //     return dp.get(key);
  // }

  // const n = piles.length;
  // const memo = [];
  // for (let i = 0; i < n; i++) {
  //     memo[i] = [];
  // }
  // return topDown(0, n - 1) > 0;
  // function topDown(start, end) {
  //     if (start == end) return piles[start];
  //     if (memo[start][end]) return memo[start][end];
  //     const startPick = piles[start] - topDown(start + 1, end);
  //     const endPick = piles[end] - topDown(start, end - 1);
  //     const res = Math.max(startPick, endPick);
  //     memo[start][end] = res;
  //     return res;
  // }
};
