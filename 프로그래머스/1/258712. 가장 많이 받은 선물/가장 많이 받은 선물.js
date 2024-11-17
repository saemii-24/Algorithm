function solution(friends, gifts) {
  let friendTable = {}; //주고받은 선물 기록
  let presentScore = {}; //선물 지수 기록

  // 선물 목록을 객체로 만든다.
  for (let friend of friends) {
    friendTable[friend] = {};
    for (let otherFriend of friends) {
      if (friend !== otherFriend) {
        friendTable[friend][otherFriend] = 0;
      }
    }
  }

  // 선물 지수를 객체로 만든다.
  for (let friend of friends) {
    presentScore[friend] = {};
    for (let presentCategory of ["give", "receive", "score", "expect"]) {
      presentScore[friend][presentCategory] = 0;
    }
  }

  // 선물 목록과 선물 지수를 기록한다.
  for (let giftInfo of gifts) {
    let [me, friend] = giftInfo.split(" ");

    //선물 목록 점수 갱신
    friendTable[me][friend] += 1;
    //선물 지수 객체의 give, receive 갱신
    presentScore[me]["give"] += 1;
    presentScore[friend]["receive"] += 1;
  }

  //선물 지수 객체의 score 갱신
  for (let friend of friends) {
    let give = presentScore[friend]["give"];
    let receive = presentScore[friend]["receive"];
    presentScore[friend]["score"] = give - receive;
  }

  //선물 지수 객체의 expect를 갱신하며 최종 결과값을 계산한다.
  for (let me of friends) {
    for (let friend of friends) {
      if (me !== friend) {
        let giveTofriend = friendTable[me][friend]; //내가 해당 친구에게 준 선물 갯수
        let receiveFromFriend = friendTable[friend][me]; //내가 해당 친구에게 받은 선물 갯수

        //만약 내가 준 게 더 많다면 이번달에 그 친구에게 선물을 받는다.
        if (giveTofriend > receiveFromFriend) {
          presentScore[me]["expect"] += 1;
          //만약 친구가 준 게 더 많다면 이번달에 그 친구에게 선물을 준다.
        } else if (giveTofriend < receiveFromFriend) {
          presentScore[friend]["expect"] += 1;
          //만약 선물 기록이 없거나 (둘 다 0) 수가 같다면 선물 지수가 더 큰 사람이 받는다.
        } else {
          let myScore = presentScore[me]["score"];
          let friendScore = presentScore[friend]["score"];
          if (myScore > friendScore) presentScore[me]["expect"] += 1;
          else if (myScore < friendScore) presentScore[friend]["expect"] += 1;
        }
      }
    }
  }

  //가장 많은 선물을 받는 사람의 선물 갯수를 return 한다.
  let maxPresent = 0;

  for (let friend of friends) {
    if (presentScore[friend]["expect"] > maxPresent) {
      maxPresent = presentScore[friend]["expect"];
    }
  }
  return maxPresent / 2;
}
