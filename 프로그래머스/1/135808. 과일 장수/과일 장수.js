function solution(k, m, score) {
  let sortScore = score.sort((a, b) => b - a);
  let result = 0;

  for (let i = m; i <= score.length; i += m) {
    let thisArr = sortScore.slice(i - 3, i);
    result += thisArr[thisArr.length - 1] * m;
  }
  return result;
}