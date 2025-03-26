function solution(n,a,b){
    let cnt = 1;
    for(let i = 0; i < n / 2;  i++){
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
         if(a===b) break;
        cnt ++;
    }
    return cnt
}