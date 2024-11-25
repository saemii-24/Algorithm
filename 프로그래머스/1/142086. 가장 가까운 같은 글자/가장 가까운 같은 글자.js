function solution(s) {
  let alphabet = {};
  let result = [];
  for (let char of s) {
    if (!alphabet[char]) {
      result.push(-1);
      Object.keys(alphabet).forEach((key) => (alphabet[key] += 1));
      alphabet[char] = 1;
    } else {
      result.push(alphabet[char]);
      Object.keys(alphabet).forEach((key) => (alphabet[key] += 1));
      alphabet[char] = 1;
    }
  }
  return result;
}