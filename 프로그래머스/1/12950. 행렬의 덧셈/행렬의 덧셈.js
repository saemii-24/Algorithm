function solution(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        let arr = [];
        for (let j = 0; j < arr1[i].length; j++) {
            let sum = 0;
            sum += arr1[i][j] + arr2[i][j]
            arr.push(sum)
        }
        result.push(arr)
    }
    return result
}
