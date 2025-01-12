function solution(n) {
    let count = 0;
    
    for (let m = 1; m * (m - 1) / 2 < n; m++) {
        if ((2 * n - m * (m - 1)) % (2 * m) === 0) {
            count++;
        }
    }
    
    return count;
}
