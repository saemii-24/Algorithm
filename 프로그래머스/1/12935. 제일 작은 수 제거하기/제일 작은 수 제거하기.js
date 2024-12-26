function solution(arr) {
    if (arr.length === 1) return [-1]; 

    let min = Math.min(...arr);
    let deleteMin = arr.filter((item) => item !== min);

    return deleteMin;
}
