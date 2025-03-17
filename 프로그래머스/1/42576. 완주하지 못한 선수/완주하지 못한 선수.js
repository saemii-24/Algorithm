function solution(participant, completion) {
    let obj = {};
    for(let part of participant) obj[part] = (obj[part] || 0) + 1;
    for(let comp of completion){
         obj[comp] = obj[comp] - 1
        if(obj[comp] === 0) delete obj[comp]
    }
    return  Object.entries(obj)[0][0];
}