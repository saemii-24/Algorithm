function solution(N, stages) {
  //사용자들의 스테이지 누적 현황
  let success = new Array(N+1).fill(0); //현재 도전중 + 최종완료한 사람 

  for (let stage of stages) {
    for (let i = 0; i <= stage-1; i++) {
      success[i] += 1;
    }
  }

  let result = [];
  for (let i = 0; i < N; i++) {
    let fail = (success[i]-success[i+1]) / success[i]
    fail ? result.push([fail, i+1]) : result.push([0, i+1]);
  }
  return result.sort((a,b)=>b[0]-a[0]).map(item=>Number(item[1]));
}