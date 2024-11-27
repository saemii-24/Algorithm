function solution(number, limit, power) {
  //기사 arr
  let arr = new Array(number).fill(0).map((_, index) => index + 1);
  let darr = arr.map((item) => {
    let cnt = 0;
    for (let i = 1; i <= Math.sqrt(item); i++) {
      if (item % i == 0) {
        if (i !== Math.sqrt(item)) {
          cnt += 2;
        } else {
          cnt += 1;
        }
      }
    }
    return cnt;
  });

  //철의 무게
  let iron = 0;
  darr.forEach((item) => {
    if (item <= limit) {
      iron += item;
    } else {
      iron += power;
    }
  });
  return iron
}
