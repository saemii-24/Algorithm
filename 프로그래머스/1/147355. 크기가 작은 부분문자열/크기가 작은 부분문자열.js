function solution(t, p) {
  let arr = [];
  for (let i = 0; i < t.length - p.length + 1; i++) {
    arr.push(t.slice(i, i + p.length));
  }
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i]) <= Number(p)) count++;
  }
  return count;
}
