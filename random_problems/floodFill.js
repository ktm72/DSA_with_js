var floodFill = function (image, sr, sc, color) {
  if (image == null || image[sr][sc] === color) return image;
  let row = image.length,
    col = image[0].length;
  fill(image, sr, sc, image[sr][sc], color);
  return image;
  function fill(image, r, c, initial, color) {
    if (r < 0 || r >= row) return;
    if (c < 0 || c >= col) return;
    if (image[r][c] !== initial) return;
    image[r][c] = color;
    fill(image, r + 1, c, initial, color); //up
    fill(image, r - 1, c, initial, color); //down
    fill(image, r, c + 1, initial, color); //right
    fill(image, r, c - 1, initial, color); //left
  }
};
