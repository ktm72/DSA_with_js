function pascalRow(num) {
  //   const res = [];
  //   while (res.length <= num) {
  //     res.unshift(1);
  //     for (let i = 1; i < res.length - 1; i++) {
  //       res[i] += res[i + 1];
  //     }
  //   }
  //   return res;//O(n+k)
  let pascals = [1];
  if (num < 0) return [];
  if (num === 0) return pascals;
  if (num === 1) return [1, 1];
  for (let i = 1; i <= num; i++) {
    let element = (pascals[i - 1] * (num - i + 1)) / i;
    pascals.push(element);
  }
  return pascals; //O(n)
}
console.log(pascalRow(2));
