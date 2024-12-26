function solution(left, right) {
    //약수의 짝홀 구하기
    //n이 제곱수면 홀수, 그 외는 짝수 임
    let result = 0;
    for(let i = left; i <= right; i++){
        if(Number.isInteger(Math.sqrt(i))) result -= i; //제곱수(홀수) 빼기
        else result += i; //제곱수(짝수) 더하기
    }
    return result;
}
