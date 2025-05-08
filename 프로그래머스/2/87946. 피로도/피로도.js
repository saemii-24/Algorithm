function solution(k, dungeons) {
    let maxTurn = 0;
    let visited = Array(dungeons.length).fill(false);

    function dfs(hp, count) {
        maxTurn = Math.max(maxTurn, count);
        
        for (let i = 0; i < dungeons.length; i++) {
            let [minHp, cost] = dungeons[i];
            if (!visited[i] && hp >= minHp) {
                visited[i] = true;
                dfs(hp - cost, count + 1);
                visited[i] = false; 
            }
        }
    }

    dfs(k, 0);
    return maxTurn;
}
