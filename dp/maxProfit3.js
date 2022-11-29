/**
 * @param {*} prices
 * 2 transection/day, Buy->Sell->Buy
 * @returns actual profit
 */
// function maxProfit(prices) {
//   if (prices.length == 0) return 0;

//   let dp = new Array(prices.length).fill(0);
//   let buy = prices[0];
//   let maxProfit = 0;
//   for (let i = 1; i < prices.length; i++) {
//     buy = Math.min(buy, prices[i]);
//     maxProfit = Math.max(maxProfit, prices[i] - buy);
//     dp[i] = maxProfit;
//   }

//   // 1st run dp = [0,0,2,2,2,3,3,4];

//   buy = prices[0];
//   maxProfit = 0;
//   for (let i = 1; i < prices.length; i++) {
//     buy = Math.min(buy, prices[i] - dp[i]);
//     maxProfit = Math.max(maxProfit, prices[i] - buy);
//     dp[i] = maxProfit;
//   }

//   // 2nd run dp = [0,0,2,2,2,5,5,6];
//   return dp.pop();
// } //O(n)

function MaxProfit(prices) {
  let buy1 = prices[0],
    buy2 = Infinity,
    profit1 = 0,
    profit2 = 0,
    len = prices.length;
  if (len <= 0) return 0;
  for (let i = 1; i < len; i++) {
    buy1 = Math.min(buy1, prices[i]);
    profit1 = Math.max(profit1, prices[i] - buy1);

    buy2 = Math.min(buy2, prices[i] - profit1);
    profit2 = Math.max(profit2, prices[i] - buy2);
  }

  return profit2;
} // O(n)

console.log(MaxProfit([3, 3, 5, 0, 0, 3, 1, 4]));
