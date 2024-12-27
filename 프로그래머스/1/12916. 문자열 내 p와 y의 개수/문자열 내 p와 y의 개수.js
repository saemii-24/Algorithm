function solution(s) {
  let [p, y] = [0, 0];
  
  for (let alphabet of s) {
    if (alphabet.toLowerCase() === 'p') p++;
    else if (alphabet.toLowerCase() === 'y') y++;
  }
  return p === y; 
}
