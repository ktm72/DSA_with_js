function minCostClimbingStairs(cost: number[]): number {
  let len: number = cost.length;
  let table: number[] = new Array(len + 1).fill(0);
  for (let i = 2; i <= len; i++) {
    let downOne = table[i - 1] + cost[i - 1]; //prevOne
    let downTwo = table[i - 2] + cost[i - 2]; //prevTwo
    table[i] = Math.min(downOne, downTwo);
  }
  return table[len];
}
//this can be solved mutating cost array using bottom-up approach
