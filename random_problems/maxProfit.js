// function maxProfit(prices) {
//   let profit = 0;
//   let buy = prices[0]; // 1st value
//  let len= prices.length;
//   for (let i = 1; i < len; i++) {
//     if (buy > prices[i]) {
//       buy = prices[i]; //buy in less price
//     } else {
//       profit = Math.max(prices[i] - buy, profit);
//     }
//   }
//   return profit; //O(n)
// }

//Two pointers -> fast
function maxProfit(prices) {
  let l = 0,
    r = 1,
    len = prices.length; // 1st index value buy, 2nd value sell
  let maxP = 0;
  while (r < len) {
    //buy < sell
    if (prices[l] < prices[r]) {
      //sell - buy
      let profit = prices[r] - prices[l];
      maxP = Math.max(maxP, profit);
    } else {
      l = r; // change left pointer to right
    }
    r += 1;
  }
  return maxP; //O(n)
}
