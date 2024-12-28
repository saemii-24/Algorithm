function solution(participant, completion) {
    const obj = {};
    
    for (let part of participant) {
        obj[part] = (obj[part] || 0) + 1;
    }
    
    for (let comp of completion) {
        if (obj[comp]) {
            obj[comp] -= 1;
            if (obj[comp] === 0) {
                delete obj[comp];
            }
        }
    }
    
    return Object.keys(obj)[0];
}
