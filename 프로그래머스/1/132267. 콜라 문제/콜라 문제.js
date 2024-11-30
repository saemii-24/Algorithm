function solution(a, b, n) {
    let my = n; 
    let result = 0;

    while (my >= a) {
        let exchanged = Math.floor(my / a); 
        result += exchanged * b; 
        my = exchanged * b + (my % a); 
    }

    return result;
}
