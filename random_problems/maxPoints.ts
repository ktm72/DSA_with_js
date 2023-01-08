/**
 *
 * @param points
 * @returns max points in a straight line
 */
const maxPoints = (points: number[][]): number => {
  const n = points.length;
  if (n < 3) return n;
  const map = new Map<number, number>();
  let res = 0;
  //avoid concurrent points for next iteration
  //say we have 5 points, and we found 3 points are concurrent
  //then remaining 2 points isn't the max
  for (let i = 0; i < n - res - 1; i++) {
    //take a point
    const [x, y] = points[i];
    let max = 1;
    let slope = 0;
    //calculate maxPoints from that point
    for (let j = i + 1; j < n; j++) {
      const [xx, yy] = points[j];
      //vertical lines, slope = infinity
      if (xx === x) slope = Number.MAX_SAFE_INTEGER;
      else slope = (yy - y) / (xx - x);

      if (!map.has(slope))
        //a straight line has min 2 points
        map.set(slope, 2);
      //concurrent points in a straight line has equal slope
      else map.set(slope, (map.get(slope) as number) + 1);

      max = Math.max(max, map.get(slope) as number);
    }
    map.clear();
    res = Math.max(res, max);
  }
  return res;
};
console.log(
  maxPoints([
    [1, 1],
    [3, 2],
    [5, 3],
    [4, 1],
    [2, 3],
    [1, 4],
  ])
); //4
