function solution(numbers) {
  let sum = numbers.reduce((acc, cur) => acc + cur, 0);
  return sum / numbers.length;
}