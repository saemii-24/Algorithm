function solution(k, score) {
    let honor = [];
    let minScore = [];
    
    for(let i = 0 ; i < score.length; i++){
        honor.push(score[i])
        honor = honor.sort((a,b)=>b-a)
        if(i > k - 1){
         honor.pop()   
        }
        minScore.push(honor[honor.length-1])
    }
    return minScore
}
