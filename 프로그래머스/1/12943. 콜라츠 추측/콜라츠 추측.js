function solution(num) {
    let result = num
    let count = 0
    while(result!==1){
        if(result%2===0) result = result/2
        else if(result%2===1) result = result * 3 + 1
        count++;
        if(count>=500) return -1
    }
    return count
}