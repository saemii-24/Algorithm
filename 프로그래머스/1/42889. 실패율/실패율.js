function solution(N, stages) {
  //(각 스테이지 별 멈춰있는 사용자의 수 obj)
  let stageObj = {};
  for (let person of stages) {
    stageObj[person] = (stageObj[person] || 0) + 1;
  }

  //(각 스테이지별 실패율 저장된 obj)
  let failureRateObj = {};

  //1. 주어진 스테이지의 길이(N)에서 각 실패율을 계산한다.
  //(child는 stageObj에서 바로 받아오고, parent는 누적해서 값을 빼야 한다.)
  let [child, parent] = [0, stages.length];

  for (let i = 1; i <= N; i++) {
    //2. 각 실패율의 분모는 전체 인원 - 이전에 멈춘 사람 수(직전 스테이지 분자 값)
    child = stageObj[i] || 0;
    parent -= stageObj[i - 1] || 0;

    failureRateObj[i] = child / parent;
  }

  //3. 실패율이 높은 스테이지부터 내림차순으로 스테이지 번호가 담겨있는 배열을 return한다.
  return Object.entries(failureRateObj)
    .sort((a, b) => b[1] - a[1])
    .map(([key]) => Number(key));
}