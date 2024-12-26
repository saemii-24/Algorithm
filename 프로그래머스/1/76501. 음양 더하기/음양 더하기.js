function solution(absolutes, signs) {
    const result = absolutes.reduce((acc, cur, index) => {
        if(signs[index]) return cur + acc;
        else return acc - cur
}, 0);
    return result
}