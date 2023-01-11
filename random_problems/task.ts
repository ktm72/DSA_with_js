var leastInterval = function (tasks: string[], n: number): number {
  //n -> cooldown
  if (n === 0) return tasks.length;

  const map = {};
  let max = 0; // max task' frequency
  for (let t of tasks) {
    map[t] = (map[t] || 0) + 1;
    max = Math.max(max, map[t]);
  }

  let groupSize = 0; // the number of tasks with same max frequency
  for (let t in map) {
    if (map[t] === max) {
      groupSize++;
    }
  }

  return Math.max((max - 1) * (n + 1) + groupSize, tasks.length);
  //Greedy
  // const charMap = new Map<string, number>();
  // let maxCharCount = 0;
  // let maxChar = tasks[0];

  // for (let char of tasks) {
  //   charMap.set(char, (charMap.get(char) || 0) + 1);
  //   if ((charMap.get(char) as number) > maxCharCount) {
  //     maxCharCount = charMap.get(char) as number;
  //     maxChar = char;
  //   }
  // }

  // let idleCount = (maxCharCount - 1) * n; //(3-1)*2

  // charMap.forEach((freq, char) => {
  //   // 'return' inside forEach() serve as 'continue'
  //   //task starts with maxChar
  //   if (char === maxChar) return;
  //   if (freq === maxCharCount) idleCount -= freq - 1;
  //   else idleCount -= freq;
  // });

  // //   if (idleCount <= 0) return tasks.length; if n=0, idleCount = 0
  // return tasks.length + idleCount;
};

/**
 * what is happening here if(count === maxCharCount) idleCount -= (count - 1);
 * All idles are between 2 maxChar tasks. Let's say we're given
 * tasks = ['A', 'A', 'A', 'B', 'B', 'B'], n = 1 . And we chose A to be the maxChar
 * Thus idleCount would be 2. This is because we only need idle between 2 identical
 * tasks, so it would be A -> idle -> A -> idle -> A. When we add the 'B's,
 * the first 2 'B's cancel the idles but since the number of 'B's is
 * the same as the maxChar count, the last B is useless, meaning it
 * doesn't cancel an idle. It would be: A -> B -> A -> B -> A -> B.
 */
console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 2));
