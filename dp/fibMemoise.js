//fib
let calculation = 0;
function fib(n) {
  calculation++;
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

function memoise() {
  const cache = {};
  return function fibonacci(n) {
    calculation++;
    if (n.toString() in cache) {
      return cache[n.toString()];
    } else {
      if (n <= 2) return 1;
      const result = fibonacci(n - 1) + fibonacci(n - 2);
      cache[n.toString()] = result;
      return result;
    }
  };
}

// console.log(fib(30));
// console.log("we run fib func " + calculation + " times");

const memoisedFib = memoise();
console.log(memoisedFib(30));
console.log("we run fib func " + calculation + " times");
