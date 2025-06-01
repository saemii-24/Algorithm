function solution(n){
    return n.toString(2).split('').filter((num)=>num==='1').length;
}