function grahamScan(points) {
  // Sort the points by their x-coordinate
  points.sort((a, b) => a.x - b.x);

  // Get the point with the lowest y-coordinate (if there are ties, take the one with the lowest x-coordinate)
  let lowestPoint = points[0];
  for (let i = 1; i < points.length; i++) {
    if (
      points[i].y < lowestPoint.y ||
      (points[i].y === lowestPoint.y && points[i].x < lowestPoint.x)
    ) {
      lowestPoint = points[i];
    }
  }

  // Sort the points by the angle they and the lowest point make with the x-axis
  points.sort((a, b) => {
    if (a === lowestPoint) return -1;
    if (b === lowestPoint) return 1;

    let thetaA = Math.atan2(a.y - lowestPoint.y, a.x - lowestPoint.x);
    let thetaB = Math.atan2(b.y - lowestPoint.y, b.x - lowestPoint.x);
    return thetaA - thetaB;
  });

  // Initialize the stack with the lowest point and the point next to it (if there are at least two points)
  let stack = [lowestPoint];
  if (points.length > 1) {
    stack.push(points[1]);
  }

  // Process the remaining points
  for (let i = 2; i < points.length; i++) {
    let currentPoint = points[i];

    // Keep removing points from the stack until the current point makes a left turn with the last two points in the stack
    while (
      stack.length > 1 &&
      !isLeftTurn(
        stack[stack.length - 2],
        stack[stack.length - 1],
        currentPoint
      )
    ) {
      stack.pop();
    }

    stack.push(currentPoint);
  }

  return stack;
}

function isLeftTurn(a, b, c) {
  return (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x) > 0;
}

let houseLocations = [
  { x: 0, y: 0 },
  { x: 1, y: 1 },
  { x: 2, y: 2 },
  { x: 3, y: 3 },
  { x: 4, y: 2 },
  { x: 5, y: 1 },
  { x: 6, y: 0 },
];

let landmarks = grahamScan(houseLocations);
console.log(landmarks);
//output [{ x: 0, y: 0 },{ x: 6, y: 0 },{ x: 3, y: 3 }]
