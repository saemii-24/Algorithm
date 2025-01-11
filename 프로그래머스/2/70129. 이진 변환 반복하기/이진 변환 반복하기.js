function solution(s, repeatCount = 0, deleteCount = 0) {
    const deleteZero = s.replaceAll(/0/g, '');
    const deleteNum = s.length - deleteZero.length;
    const nowLength = deleteZero.length;
    const makeNewNum = Number(nowLength).toString(2);
    
    if (makeNewNum === '1') {
        return [repeatCount + 1, deleteCount + deleteNum];
    }

    return solution(makeNewNum, repeatCount + 1, deleteCount + deleteNum);
}
