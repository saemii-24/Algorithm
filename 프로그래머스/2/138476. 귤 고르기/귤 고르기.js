function solution(k, tangerine) {
    let obj = {};

    for (let tan of tangerine) {
        obj[tan] = (obj[tan] || 0) + 1;
    }

    const sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);

    let count = 0; 
    let sum = 0;

    for (let [key, value] of sorted) {
        sum += value;
        count++;
        if (sum >= k) break;
    }

    return count;
}
