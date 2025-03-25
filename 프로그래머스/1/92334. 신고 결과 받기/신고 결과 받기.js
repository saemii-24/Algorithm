function solution(id_list, report, k) {
  let 신고당한횟수 = {};
  let 누가신고했나 = {};

  id_list.forEach((user) => {
    신고당한횟수[user] = 0;
    누가신고했나[user] = new Set();
  });

  for (let rep of report) {
    let [신고자, 신고된사람] = rep.split(" ");
    if (!누가신고했나[신고자].has(신고된사람)) {
      누가신고했나[신고자].add(신고된사람);
      신고당한횟수[신고된사람] += 1; //동일인물이 신고한 횟수는 1로 카운팅
    }
  }

  let 정지된유저 = new Set();
  for (let user in 신고당한횟수) {
    if (신고당한횟수[user] >= k) {
      정지된유저.add(user);
    }
  }

  return id_list.map((user) => {
    let count = 0;
    누가신고했나[user].forEach((신고한유저) => {
      if (정지된유저.has(신고한유저)) count++;
    });
    return count;
  });
}