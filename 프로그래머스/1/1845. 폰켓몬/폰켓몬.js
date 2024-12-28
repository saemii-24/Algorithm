function solution(nums) {
    let obj = {}
        for(let num of nums){
            obj[num] = (obj[num] || 0) + 1
        }
    let selectNum = nums.length / 2;
    let objKeyNum = Object.keys(obj).length
    
    return selectNum < objKeyNum ? selectNum : objKeyNum
}