function solution(wallpaper) {
  let [maxX, maxY, minX, minY] = [0, 0, wallpaper.length, wallpaper[0].length];

  for (let x = 0; x < wallpaper.length; x++) {
    for (let y = 0; y < wallpaper[0].length; y++) {
      if (wallpaper[x][y] === "#") {
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
        if (x < minX) minX = x;
        if (y < minY) minY = y;
      }
    }
  }
  return [minX, minY, maxX + 1, maxY + 1];
}
