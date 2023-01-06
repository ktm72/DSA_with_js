function maxIceCream(costs: number[], coins: number) {
  let n = costs.length,
    count = 0;
  costs.sort((a: number, b: number) => a - b);
  // for(let i = 0; i<= n; i++){
  //     let cost = costs[i];
  //     if(cost<=coins){
  //         coins-=cost;
  //         count++;
  //     } else {
  //         return count;
  //     }
  // }
  while (count < n && costs[count] <= coins) {
    // We can buy this icecream, reduce the cost from the coins.
    coins -= costs[count];
    count++;
  }
  return count;
}
