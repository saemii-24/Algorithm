function solution(array, commands) {
    let result = [];
    
    for(let [a, b, c] of commands){
        let cut = array.slice(a-1, b).sort((a,b)=>a-b)[c-1];
        result.push(cut)
    }
    
    return result
}