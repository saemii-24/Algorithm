function solution(today, terms, privacies) {
  //현재 날짜를 date 객체로 변경한다.
  const [todayYear, todayMonth, todayDay] = today
    .split(".")
    .map((item) => Number(item));
  const todayDate = new Date(todayYear, todayMonth - 1, todayDay + 1);

  //개인정보 약관:유효기간 object
  const personalInfoValidity = {};
  terms.forEach((item) => {
    const [privacy, validity] = item.split(" ");
    personalInfoValidity[privacy] = Number(validity);
  });

  const result = [];
  //각 동의일에 약관에 따른 유효기간을 더하고 현재 일자와 비교해 폐기해야 하는 것의 index+1을 배열에 넣는다.
  for (let i = 0; i < privacies.length; i++) {
    const [pastDate, pastPrivacy] = privacies[i].split(" ");
    const [year, month, day] = pastDate.split(".").map((item) => Number(item));
    const lastDate = new Date(year, month - 1, day + 1);
    lastDate.setMonth(lastDate.getMonth() + personalInfoValidity[pastPrivacy]);

    //lastDate가 현재 기준으로 지났다면 result에 index+1을 push
    if (todayDate >= lastDate) {
      result.push(i + 1);
    }
  }

  return result.sort((a, b) => a - b);
}