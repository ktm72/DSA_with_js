//fib
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
//sum
function sum(...args) {
  return args.reduce((acc, num) => acc + num);
}
function memoise(fn) {
  const cache = {};
  return (...agrs) => {
    if (agrs.toString() in cache) {
      console.log("from cache");
      return cache[agrs.toString()];
    }
    const result = fn(...agrs);
    cache[agrs.toString()] = result;
    return result;
  };
}

const memoisedSum = memoise(sum);
console.log(memoisedSum(4, 7, 8, 10));
console.log(memoisedSum(4, 7, 8, 10));
console.log(memoisedSum(4, 7, 8, 10));

const memoisedFib = memoise(fib);
console.log(memoisedFib(30));
console.log(memoisedFib(30));
