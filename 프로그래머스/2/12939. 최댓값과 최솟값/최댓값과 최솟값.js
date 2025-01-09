function solution(s) {
  let input = s.split(' ').map(Number);
  return Math.min(...input) +" "+ Math.max(...input);
}
