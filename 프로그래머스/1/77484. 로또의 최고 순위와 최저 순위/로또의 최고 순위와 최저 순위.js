function solution(lottos, win_nums) {
    let obj = {};
    let score = {'6':1 , '5':2, '4':3, '3':4, '2':5}
    let count = 0;
    for(let lotto of lottos){
        obj[lotto] = (obj[lotto] || 0) + 1
    }
    for(let win of win_nums){
        if(obj[win] > 0){
            count ++;
        }
    }
    
    let min = score[count] ? score[count] : 6
    let max = score[count + (obj['0'] || 0)] || 6;
    return [max, min]
}