function solution(word) {
  const vowels = ["A", "E", "I", "O", "U"];
  const words = [];

  function dfs(current) {
    if (current.length > 5) return;

    if (current.length > 0) {
      words.push(current);
    }

    for (let v of vowels) {
      dfs(current + v);
    }
  }

  dfs("");

  return words.indexOf(word) + 1;
}