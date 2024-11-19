//사용자의 시작 지점을 확인한다.
function start(park) {
  const row = park.findIndex((row) => row.includes("S"));
  const col = park[row].indexOf("S");
  return [row, col];
}

//장애물 지점을 찾는다.
function stop(park) {
  let stopObj = {};
  for (let i = 0; i < park.length; i++) {
    for (let j = 0; j < park[i].length; j++) {
      if (park[i][j] === "X") {
        if (stopObj[i]) stopObj[i].push(j);
        else stopObj[i] = [j];
      }
    }
  }
  return stopObj;
}
function solution(park, routes) {
  // 시작 지점 배열
  let startArr = start(park);
  let stopObj = stop(park);

  for (let route of routes) {
    let [direction, routeLength] = route.split(" ");
    let validMove = true;

    let tempStartArr = [...startArr];

    for (let i = 0; i < routeLength; i++) {
      switch (direction) {
        case "E":
          tempStartArr[1]++;
          break;
        case "W":
          tempStartArr[1]--;
          break;
        case "S":
          tempStartArr[0]++;
          break;
        case "N":
          tempStartArr[0]--;
          break;
      }

      // 경계 조건
      if (
        tempStartArr[0] < 0 ||
        tempStartArr[0] >= park.length ||
        tempStartArr[1] < 0 ||
        tempStartArr[1] >= park[0].length
      ) {
        validMove = false;
        break;
      }

      // 장애물 충돌
      if (
        stopObj[tempStartArr[0]] &&
        stopObj[tempStartArr[0]].includes(tempStartArr[1])
      ) {
        validMove = false;
        break;
      }
    }

    //가능한 경우에만 기존 시작 지점에서 업데이트
    if (validMove) {
      startArr = tempStartArr;
    }
  }

  return startArr;
}
