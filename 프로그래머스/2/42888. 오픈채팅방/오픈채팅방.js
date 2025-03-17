function solution(record) {
    let uidName = {};
    let result = [];
    
    for (let rec of record) {
        let [rec1, rec2, rec3] = rec.split(' ');
        if (rec1 === 'Enter' || rec1 === 'Change') {
            uidName[rec2] = rec3; 
        }
    }
    
    for (let rec of record) {
        let [rec1, rec2] = rec.split(' ');
        if (rec1 === 'Enter') {
            result.push(`${uidName[rec2]}님이 들어왔습니다.`);
        } else if (rec1 === 'Leave') {
            result.push(`${uidName[rec2]}님이 나갔습니다.`);
        }
    }
    
    return result;
}
