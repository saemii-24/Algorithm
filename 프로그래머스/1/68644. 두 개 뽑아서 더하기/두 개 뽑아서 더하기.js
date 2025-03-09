function solution(numbers) {
    // (중복값 제거를 위함)
    let mySet = new Set();
    
    //1. 서로 다른 인덱스에 있는 두 개의 수를 뽑고 더한다.
    for(let a = 0; a < numbers.length; a++){
        for(let b = 0; b < numbers.length; b++){
            //2. 이 때 나올 수 있는 숫자의 중복값을 제거한다.
            if(a !== b) mySet.add(numbers[a]+numbers[b])
        }   
    }
    //3. 모든 값을 오름차순으로 정렬하여 return한다.
    return [...mySet].sort((a,b)=>a-b)
}