function solution(s) {
    let stack = [];
    for (let str of s) {
        if (stack.length > 0 && stack[stack.length - 1] === str) {
            stack.pop();
        } else {
            stack.push(str);
        }
    }
    return stack.length > 0 ? 0 : 1;
}
