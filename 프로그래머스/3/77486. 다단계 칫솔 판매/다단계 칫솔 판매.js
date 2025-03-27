function solution(enroll, referral, seller, amount) {
  let parent = {};
  for (let i = 0; i < enroll.length; i++) {
    if (referral[i] !== "-") {
      parent[enroll[i]] = referral[i];
    }
  }

  let sell = {};
  for (let person of enroll) {
    sell[person] = 0;
  }

  // 수익 분배 진행
  for (let i = 0; i < seller.length; i++) {
    let person = seller[i];
    let money = amount[i] * 100;

    while (money > 0 && person !== "-") {
      let share = Math.floor(money * 0.1);
      sell[person] += money - share;

      person = parent[person];
      money = share;
    }
  }

  return enroll.map((name) => sell[name]);
}
