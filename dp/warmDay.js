var dailyTemperatures = function (temperatures) {
  const n = temperatures.length;
  let res = new Array(n).fill(0);
  let stack = []; //indices
  for (let i = 0; i < n; i++) {
    const tm = temperatures[i];
    while (stack.length && tm > stack[stack.length - 1][0]) {
      let [, idx] = stack.pop();
      res[idx] = i - idx; //waitingForWarmDay
    }
    stack.push([tm, i]);
  }
  return res;
};
