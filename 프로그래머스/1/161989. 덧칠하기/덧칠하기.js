function solution(n, m, section) {
  let count = 0;

  // //칠해져있으면 1 없으면 0인 배열을 만든다.
  let nowArr = new Array(n).fill(1);
  for (let i of section) nowArr[i - 1] = 0;

  //비어있는 공간의 맨 앞부터 칠하기 시작한다.
  for (let i of section) {
    if (nowArr[i - 1] === 0) {
      //비어있다면
        for (let j = i - 1; j < i - 1 + m && j < n; j++) {
        nowArr[j] = 1; //칠한다.
      }
      count++;
    }
  }
  return count;
}