//fib
let calculation: number = 0;
function fib(n: number): number {
  calculation++;
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

function memoise() {
  const cache: { [key: string]: number } = {};
  return function fibonacci(n: number): number {
    calculation++;
    if (n.toString() in cache) {
      return cache[n];
    } else {
      if (n <= 2) return 1;
      const result: number = fibonacci(n - 1) + fibonacci(n - 2);
      cache[n] = result;
      return result;
    }
  };
}

// console.log(fib(30));
// console.log("we run fib func " + calculation + " times");

const memoisedFib = memoise();
console.log(memoisedFib(30));
console.log("we run fib func " + calculation + " times");
