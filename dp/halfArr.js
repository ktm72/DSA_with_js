function minSetSize(arr) {
  //Greedy approach
  const set = {};
  let count = 0,
    sum = 0,
    n = arr.length;
  for (let i = 0; i < n; i++) {
    set[arr[i]] = (set[arr[i]] || 0) + 1;
  }
  //   const freq = []; //can be done with a Priority Queue
  //   for (let key in set) {
  //     freq.push(set[key]);
  //   }
  //   freq.sort();
  //   while (sum < Math.ceil(n / 2)) {
  //     let max = freq.pop();
  //     sum += max;
  //     count++;
  //   }
  //   return count;

  const freq = Object.values(set).sort((a, b) => b - a);
  for (let i = 0; i < freq.length; i++) {
    sum += freq[i];
    count++;
    if (sum >= n / 2) {
      return count;
    }
  }
  return n / 2;
}
console.log(minSetSize([3, 3, 3, 3, 5, 5, 5, 2, 2, 7]));
