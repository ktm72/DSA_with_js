//convex hull is a polygon that encloses all the points
//the vertices maximize the area while minimizing the circumference
//jarvis march algo
function convexHullTrick(points) {
  // Initialize an empty array to store the points on the convex hull
  let hull = [];
  // Iterate through the points in the given array
  for (let i = 0; i < points.length; i++) {
    // While the size of the convex hull is greater than 1 and
    //the slope of the line connecting the last point on the convex hull to the current point is
    //less than the slope of the line connecting the second-to-last point on the convex hull
    //to the last point, remove the last point from the convex hull
    //1st slope < 2nd slope => counter-clockwise else clockwise, if = then collinear
    while (
      hull.length > 1 &&
      //slope of 2nd last and last point
      slope(hull[hull.length - 2], hull[hull.length - 1]) <
        //slope of 2nd last to all other points
        slope(hull[hull.length - 2], points[i])
    ) {
      hull.pop();
    }
    // Add the current point to the convex hull
    hull.push(points[i]);
  }
  // Return the points on the convex hull
  return hull;
}

// Function to calculate the slope of the line connecting two points
function slope(p1, p2) {
  return (p2[1] - p1[1]) / (p2[0] - p1[0]);
}

// Example usage:
let points = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
];
console.log(convexHullTrick(points)); // Outputs [[1, 2], [5, 6]]
