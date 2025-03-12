function solution(prices) {
    let stack = [];
    let result = new Array(prices.length).fill(0);

    for (let i = 0; i < prices.length; i++) {
      
        while (stack.length > 0 && prices[stack[stack.length - 1]] > prices[i]) {
            let idx = stack.pop();
            result[idx] = i - idx; 
        }
        stack.push(i); 
    }

    while (stack.length > 0) {
        let idx = stack.pop();
        result[idx] = prices.length - 1 - idx;
    }

    return result;
}
