function frequencySort(s) {
  //   const map = new Map();

  //   for (let ch of String(s)) {
  //     map.set(ch, (map.get(ch) ?? 0) + 1);
  //   }
  //   //new Map is iterable, has key and value
  //   return [...map]
  //     .sort((a, b) => b[1] - a[1])
  //     .reduce((acc, [char, freq]) => acc + char.repeat(freq), "");
  const map = {};
  for (let ch of s) map[ch] = (map[ch] || 0) + 1;
  //sorted in descending order
  const sortedArr = Object.keys(map).sort((a, b) => map[b] - map[a]);
  //repear char freq times then concatinate with
  return sortedArr.reduce((acc, char) => acc + char.repeat(map[char]), ""); // O(nlogn)

  //priorityQueue
  //   let map = new Map();
  //   const pq = new MaxPriorityQueue();

  //   for (let c of s) {
  //     if (map.has(c)) map.set(c, map.get(c) + 1);
  //     else map.set(c, 1);
  //   }
  //   console.log(map);
  //   map.forEach((value, key) => pq.enqueue(key, value));

  //   let ans = "";
  //   while (!pq.isEmpty()) {
  //     let elem = pq.dequeue();
  //     ans += elem.element.repeat(elem.priority);
  //   }
  //   return ans;
}
frequencySort("Aabb");
