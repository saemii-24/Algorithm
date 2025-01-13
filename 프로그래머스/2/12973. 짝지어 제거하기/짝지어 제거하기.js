function solution(s) {
    let stack = [];
    for (let alphabet of s) {
        if (stack.length > 0 && stack[stack.length - 1] === alphabet) {
            stack.pop();
        } else {
            stack.push(alphabet);
        }
    }
    return stack.length === 0 ? 1 : 0;
}
