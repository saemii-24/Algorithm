function solution(s) {
    const sarr = s.split('');
    let cnt = 0;
    
    for(let i = 0; i < s.length; i++) {
        let firstArr = sarr.slice(i);
        let secondArr = sarr.slice(0, i);
        let concatArr = firstArr.concat(secondArr);
        
        let stack = [];
        
        for(let str of concatArr) {
            stack.push(str);
            
            if(stack.length > 1) {
                let lastTwo = [stack[stack.length - 2], stack[stack.length - 1]].join('');
                if(lastTwo === '[]' || lastTwo === '{}' || lastTwo === '()') {
                    stack.pop();
                    stack.pop();
                }
            }
        }
        
        if(stack.length === 0) cnt += 1;
    }
    
    return cnt;
}
