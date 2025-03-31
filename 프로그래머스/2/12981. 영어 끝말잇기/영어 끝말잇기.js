function solution(n, words) {
    let mySet = new Set();
    let turn = 1;
    
    // 첫번째 마지막 알파벳
    let last = words[0][words[0].length-1];
    
    // 첫번째 단어는 항상 통과하므로 1부터 시작
    mySet.add(words[0]);
    
    for (let i = 1; i < words.length; i++) {
        // 끝말잇기 실패 1. 첫 글자가 마지막 알파벳과 다를 때
        if (words[i][0] !== last) {
            return [i % n + 1, Math.ceil((i + 1) / n)];
        } else {
            last = words[i][words[i].length - 1];
        }
        
        // 끝말잇기 실패 2. 이미 말한 단어를 반복했을 때
        if (mySet.has(words[i])) {
            return [i % n + 1, Math.ceil((i + 1) / n)];
        } else {
            mySet.add(words[i]);
        }
    }
    return [0, 0];
}
