function solution(orders, course) {
  const answer = [];

  for (const c of course) {
    const menu = [];

    //주문 가능한 모든 조합 생성
    for (const order of orders) {
      const orderArr = order.split("").sort();
      const comb = combinations(orderArr, c);
      menu.push(...comb);
    }

    const counter = {};
    for (const m of menu) {
      const key = m.join("");
      counter[key] = (counter[key] || 0) + 1;
    }

    const max = Math.max(...Object.values(counter));
    if (max > 1) {
      for (const [key, value] of Object.entries(counter)) {
        if (value === max) {
          answer.push(key);
        }
      }
    }
  }

  return answer.sort();
}

function combinations(arr, n) {
  if (n === 1) return arr.map((v) => [v]);
  const result = [];

  for (let i = 0; i < arr.length - n + 1; i++) {
    const fixed = arr[i];
    const rest = arr.slice(i + 1);
    const combinationsOfRest = combinations(rest, n - 1);
    combinationsOfRest.forEach((combination) => {
      result.push([fixed, ...combination]);
    });
  }

  return result;
}
