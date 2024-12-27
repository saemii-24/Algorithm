function solution(s) {
    let mid = s.length;
    if (mid % 2 !== 0) return s[Math.floor(mid/2)]
    else return s.slice(mid/2-1 , mid/2+1);
}