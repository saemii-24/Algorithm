function solution(food) {
  let result = "";
  for (let i = 1; i < food.length; i++) {
    if (food[i] % 2 == 1) food[i] -= 1;
    if (food[i] === 0) continue;
    result += `${i}`.repeat(food[i] / 2);
  }
  return result + "0" + [...result].reverse().join("");
}