function solution(arr, divisor) {
  let answer = arr.filter((num, index) => {
    if (num % divisor === 0) return num;
  });

  return answer.length > 0 ? answer.sort((a, b) => a - b) : [-1];
}