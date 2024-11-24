function solution(keymap, targets) {
  //가장 적은 횟수로 입력할 수 있는 키보드를 만든다.
  const myKeyboard = {};
  for (let key of keymap) {
    for (let i = 0; i < key.length; i++) {
      //   console.log(key[i]);
      if (!myKeyboard[key[i]]) {
        //keyboard에 해당 key 값이 없으면 그 값을 넣어준다.
        myKeyboard[key[i]] = i + 1;
      } else {
        //keyboard에 해당 key 값이 있으면 더 작은 값으로 변경한다.
        myKeyboard[key[i]] = Math.min(myKeyboard[key[i]], i + 1);
      }
    }
  }
  //정답을 계산한다.
  let result = [];
  for (let target of targets) {
    let keyNum = 0;
    for (let key of target) {
      if (myKeyboard[key]) {
        keyNum += myKeyboard[key];
      } else {
        keyNum = -1;
          break;
      }
    }
    result.push(keyNum);
  }
  return result;
}