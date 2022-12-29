/**
 * 1 transection/day, Buy->sell->buy
 * total profit regardless of cost
 */
function maxProfit(prices) {
  //   let len = prices.length;
  //   let profit = 0;
  //   for (let i = 1; i < len; i++) {
  //     let sell = prices[i];
  //     let buy = prices[i - 1];
  //     let diff = sell - buy;
  //     //sell > buy
  //     if (diff > 0) {
  //       profit += diff;
  //     }
  //   }
  //   return profit; //O(n)
  return prices.reduce((acc, cur, i, arr) => {
    const diff = cur - arr[i - 1];
    if (!i || diff <= 0) return acc; //can't be added negative value
    return acc + diff;
  }, 0);
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
