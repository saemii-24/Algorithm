function solution(name, yearning, photo) {
  //결과값
  let result = [];

  //각 인물별 그리움 점수 object로 만들기
  let score = {};
  for (let i = 0; i < name.length; i++) {
    score[name[i]] = yearning[i];
  }

  for (let person of photo) {
    let arrScore = 0;
    for (let name of person) {
      if (score[name]) arrScore += score[name];
      else arrScore += 0;
    }
    result.push(arrScore);
  }
  return result;
}