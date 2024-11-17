// 시간 계산 초 단위
function makeSecond(minsec) {
  let time = minsec.split(":").map((item) => Number(item));
  time = time[0] * 60 + time[1];
  return time;
}

// 시간 계산 분:초
function makeMinSec(second) {
  let min = Math.floor(second / 60);
  let sec = second % 60;
  return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

// 오프닝 건너뛰기를 처리한다.
function skipOpening(op_start, op_end, now) {
  // 현재 재생위치에서 오프닝 건너뛰기를 처리한다.
  let openStart = makeSecond(op_start);
  let openEnd = makeSecond(op_end);

  if (now >= openStart && now <= openEnd) {
    now = openEnd;
  }
  return now;
}

// 최종 solution
function solution(video_len, pos, op_start, op_end, commands) {
  // 시간 계산을 위해 전부 초 단위로 계산한다.
  let now = makeSecond(pos); // 현재 재상위치의 초 단위
  let video = makeSecond(video_len); // 전체 영상길이의 초 단위

  now = skipOpening(op_start, op_end, now);

  // 사용자 입력에 따른 시간을 처리한다.
  for (let command of commands) {
    // next 명령은 10초 후 이동
    if (command === "next") {
      if (now + 10 > video)
        now = video; // 영상 끝보다 크면 영상 끝으로
      else now = now + 10;
    }
    // prev 명령은 10초 전 이동
    else if (command === "prev") {
      if (now - 10 < 0)
        now = 0; // 영상 시작보다 작으면 0으로
      else now = now - 10;
    }

    now = skipOpening(op_start, op_end, now); // 오프닝 구간 건너뛰기
  }

  // 최종적으로 계산된 시간을 분:초 포맷으로 반환
  return makeMinSec(now);
}
