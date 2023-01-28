/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, K) {
  const adj = new Map();

  for (let [start, end, cost] of flights) {
    if (adj.has(start)) adj.get(start).push([end, cost]);
    else adj.set(start, [[end, cost]]);
  }

  const queue = [[0, src, K + 1]];
  const visited = new Map();

  while (queue.length) {
    queue.sort((a, b) => a[0] - b[0]);
    const [cost, city, stops] = queue.shift();
    visited.set(city, stops);

    if (city === dst) return cost;
    if (stops <= 0 || !adj.has(city)) continue;

    for (let [nextCity, nextCost] of adj.get(city)) {
      if (visited.has(nextCity) && visited.get(nextCity) >= stops - 1) continue;
      queue.push([cost + nextCost, nextCity, stops - 1]);
    }
  }
  return -1;
};

var findCheapestPrice = function (n, flights, src, dst, K) {
  let prices = Array(n)
    .fill(null)
    .map((_, i) => (i === src ? 0 : Infinity));
  for (let k = 0; k < K + 1; k++) {
    let temp = [...prices];
    for (let [from, to, cost] of flights) {
      temp[to] = Math.min(temp[to], prices[from] + cost);
    }
    prices = [...temp];
  }
  return prices[dst] !== Infinity ? prices[dst] : -1;
};
