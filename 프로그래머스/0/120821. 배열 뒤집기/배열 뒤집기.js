function solution(num_list) {
  let opposite = [];

  for (let i = num_list.length - 1; i >= 0; i--) {
    opposite.push(num_list[i]);
  }

  return opposite;
}