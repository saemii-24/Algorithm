function solution(bandage, health, attacks) {
  //나의 게임 status
  const status = { hp: health, successBonuses: 0 };

  //각 시간을 key값으로 하는 공격 객체를 만든다.
  const attacksObj = {};

  attacks.forEach((item) => {
    const [time, attack] = item;
    attacksObj[time] = attack;
  });

  //마지막 공격시간을 찾는다.
  const lastAttackTime = attacks[attacks.length - 1][0];

  //for문을 이용해 1초부터 마지막 공격 시간까지 게임을 진행한다.
  for (let i = 1; i <= lastAttackTime; i++) {
    //각 시간에 만약 공격값이 있다면, hp를 잃고 연속 성공 횟수를 잃는다.
    if (attacksObj[i]) {
      status['hp'] -= attacksObj[i];
      status['successBonuses'] = 0;
      // console.log(attacksObj[i])
    } else {
      //공격을 받지 않는 경우 최대 체력을 넘지 않는 선에서 자동으로 bandage[1]만큼 체력을 얻는다.
      status['hp'] = Math.min(health, status['hp'] + bandage[1]);
      status['successBonuses']++;
      //만약 연속성공횟수가 bandage[0]과 같다면 추가 hp보너스 bandage[2]를 얻는다.
      if(status['successBonuses'] === bandage[0]){
        status['hp'] = Math.min(health, status['hp'] + bandage[2]);
        //연속 성공 횟수는 초기화 된다.
        status['successBonuses'] = 0;
      }
    }
    // console.log(status)
    //만약 체력이 0이하라면 게임을 종료한다.
    if (status['hp'] <= 0) {
      return -1;
    }
  }
  return status['hp'];
}