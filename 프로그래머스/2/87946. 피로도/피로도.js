function solution(k, dungeons) {
  let visited = new Array(dungeons.length).fill(false);
  let maxCount = 0;

  function dfs(cur, count) {
    if (count > maxCount) {
      maxCount = count;
    }

    for (let i = 0; i < dungeons.length; i++) {
      if (!visited[i] && dungeons[i][0] <= cur) {
        visited[i] = true;
        dfs(cur - dungeons[i][1], count + 1);
        visited[i] = false;
      }
    }
  }

  dfs(k, 0);
  return maxCount;
}