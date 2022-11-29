function maxProfit(prices) {
  //state machine
  let len = prices.length;
  if (len <= 0) return 0;
  let hold = -prices[0],
    sold = 0,
    cooldown = 0;
  for (let i = 1; i < len; i++) {
    hold = Math.max(hold, cooldown - prices[i]); //buy
    cooldown = sold; //cooldown profit remains same after sold
    sold = Math.max(sold, hold + prices[i]); //sold hold the profit after sell
  }
  return sold;
  //   let buy = -Number.MAX_VALUE;
  //   let cooldown = 0;

  //   return prices.reduce((sell, price) => {
  //     buy = Math.max(buy, cooldown - price);
  //     cooldown = Math.max(cooldown, sell);
  //     return Math.max(sell, buy + price);
  //   }, 0);
}

console.log(maxProfit([1, 2, 3, 0, 2]));
