function solution(n, left, right) {
  //규칙성 전체 배열 값
  let rule = new Array(n).fill(0).map((_, i) => i + 1);

  let result = [];

  for (let i = left; i <= right; i++) {
    const row = Math.floor(i / n);
    const col = i % n;

    result.push(Math.max(row + 1, col + 1));
  }
  return result;
}
