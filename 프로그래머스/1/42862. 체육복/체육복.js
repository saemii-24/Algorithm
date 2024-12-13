function solution(n, lost, reserve) {
  //여벌체육복을 가지고 왔는데 도난당한 경우 빌려줄 수 있는 학생명단에서 제외한다.
  const lostSet = new Set(lost);
  const canReserve = reserve
    .filter((item) => !lostSet.has(item))
    .sort((a, b) => a - b);

  //빌려줘야 할 학생 명단을 새로 계산한다.
  const reserveSet = new Set(reserve);
  const needReserve = lost
    .filter((item) => !reserveSet.has(item))
    .sort((a, b) => a - b);

  //그대로 수업 참여가 가능한 학생
  const canAttend = new Array(n + 1).fill(1); //참여 가능시 1 아니면 0
  for (let need of needReserve) {
    canAttend[need] = 0;
  }
  console.log(canAttend);

  //빌려줄수 있는 학생들이 앞 뒤 학생에게 빌려줄 필요가 있는지 확인한다
  let plz = [];
  for (let can of canReserve) {
    let plzArr = [];
    if (canAttend[can - 1] === 0) {
      console.log(can - 1 + "학생에게 빌려줘야합니다.");
      if (can - 1 > 0) plzArr.push(can - 1);
    }
    if (canAttend[can + 1] === 0) {
      console.log(can + 1 + "학생에게 빌려줘야합니다.");
      if (can + 1 <= n) plzArr.push(can + 1);
    }
    plzArr.length > 0 ? plz.push(plzArr) : null;
  }

  console.log(plz);
  //중복없이 빌려줄 학생 선택
  const mySet = new Set();
  if (plz.length > 0) {
    mySet.add(plz[0][0]);
    for (let i = 1; i < plz.length; i++) {
      if (mySet.has(plz[i][0])) {
        if (plz[i][1]) {
          mySet.add(plz[i][1]);
        }
      } else {
        if (plz[i][0]) {
          mySet.add(plz[i][0]);
        }
      }
    }
  }
  console.log(mySet);
  return canAttend.reduce((a, b) => a + b) + mySet.size - 1;
}