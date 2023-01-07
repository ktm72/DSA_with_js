const canCompleteCircuit = (gas: number[], cost: number[]): number => {
  const n = gas.length;
  let start = n - 1,
    end = 0,
    gasInTank = gas[start] - cost[start];
  while (start >= end) {
    if (gasInTank >= 0) {
      gasInTank += gas[end] - cost[end];
      end++;
    } else {
      start--;
      gasInTank += gas[start] - cost[start];
    }
  }
  return gasInTank >= 0 ? start : -1;
};
function canCompleteCircuit2(gas: number[], cost: number[]): number {
  const n = gas.length;
  let start = 0,
    tank = 0,
    totalTank = 0;
  for (let i = 0; i < n; i++) {
    let diff = gas[i] - cost[i];
    tank += diff;
    totalTank += diff;
    if (tank < 0) {
      start = i + 1;
      tank = 0;
    }
  }
  return totalTank >= 0 ? start : -1;
}
