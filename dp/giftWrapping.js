//convexHull-> jarvis march
function giftWrapping(points) {
  // Find the point with the lowest y-coordinate
  //(or the lowest x-coordinate if there is a tie)
  let start = points[0];
  for (let i = 1; i < points.length; i++) {
    if (
      //traverse through y-coordinate of each point
      points[i][1] < start[1] ||
      (points[i][1] == start[1] && points[i][0] < start[0])
    ) {
      start = points[i];
    }
  }

  // Initialize an empty array to store the points on the convex hull
  let hull = [];
  // Set the current point to the starting point
  let current = start;
  // Repeat the following steps until the current point is the starting point again
  do {
    // Add the current point to the convex hull
    hull.push(current);
    // Set the next point to be the point with the smallest angle relative to the current point
    let next = points[0];
    for (let i = 1; i < points.length; i++) {
      if (JSON.stringify(points[i]) === JSON.stringify(current)) {
        continue;
      }
      if (
        JSON.stringify(next) === JSON.stringify(current) ||
        //orientation(origin, horizontal point, all other vertical points)
        orient(current, next, points[i]) == 1
        //we also take an account for collinear points and compare dist
        // orient ===0 && dist(cur, p[i]) > dist(cur, next)
      ) {
        next = points[i];
      }
    }
    // Set the current point to the next point
    current = next;
  } while (JSON.stringify(current) !== JSON.stringify(start));

  // Return the points on the convex hull
  return hull;
}

// Function to calculate the orientation of
//a point from another relative to origin(point)
function orient(p, q, r) {
  // (y3-y2)*(x2-x1) - (y2-y1)*(x3-x2)
  let val = (q[1] - p[1]) * (r[0] - q[0]) - (q[0] - p[0]) * (r[1] - q[1]);
  if (val == 0) {
    return 0; //collinear
  }
  return val > 0 ? 1 : -1; //area + => counter clockwise 1, area - => clockwise -1
}

// Example usage:
let points = [
  [0, 3],
  [2, 2],
  [1, 1],
  [2, 1],
  [3, 0],
  [0, 0],
  [3, 3],
];
console.log(giftWrapping(points)); // Outputs [[0, 0], [3, 0], [3, 3], [0, 3]]
