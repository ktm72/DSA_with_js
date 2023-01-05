function findMinArrowShots(points: number[][]): number {
  const n = points.length;
  if (n === 0) return 0;
  const sorted = points.sort((a, b) => a[1] - b[1]);
  let arrows = 1,
    end = sorted[0][1];
  for (let i = 1; i < n; i++) {
    if (sorted[i][0] > end) {
      arrows++;
      end = sorted[i][1];
    }
  }
  return arrows;
}
