/**
 * each round, 2 or 3 tasks of the same level.
 * @param tasks
 * @returns minimum rounds
 */
function minimumRounds(tasks: number[]): number {
  const len: number = tasks.length;
  let rounds: number = 0,
    freq: { [key: string]: number } = {};
  for (let i = 0; i < len; i++) {
    freq[tasks[i]] = (freq[tasks[i]] || 0) + 1;
  }
  // console.log(freq);
  for (let t in freq) {
    if (freq[t] === 1) return -1;
    rounds += Math.floor((freq[t] + 2) / 3);
  }
  return rounds;
}
console.log(minimumRounds([2, 2, 3, 3, 4, 3, 4, 4, 4, 4, 2])); //4
