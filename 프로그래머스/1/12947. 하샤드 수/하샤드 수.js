function solution(x) {
    let sumX = String(x).split('').map((item)=>Number(item)).reduce((a,b)=>a+b,0);
    return x % sumX === 0 ?true : false
}