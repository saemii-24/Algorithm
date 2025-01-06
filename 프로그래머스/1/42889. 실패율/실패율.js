function solution(N, stages) {
    let obj = {};
    for (let i = 1; i <= N + 1; i++) obj[i] = 0;
    for (let stage of stages) obj[stage] = (obj[stage] || 0) + 1; 

    let fail = []; 
    let remainingPlayers = stages.length

    for (let i = 1; i <= N; i++) {
        let stoppedPlayers = obj[i];
        let failRate = remainingPlayers === 0 ? 0 : stoppedPlayers / remainingPlayers;
        
        fail.push([i, failRate]);
        remainingPlayers -= stoppedPlayers;
    }

    fail.sort((a, b) => b[1] - a[1] || a[0] - b[0]);

    return fail.map(([stage]) => stage);
}
