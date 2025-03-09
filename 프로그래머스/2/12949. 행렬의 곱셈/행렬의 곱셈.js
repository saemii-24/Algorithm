function solution(arr1, arr2) {
    //(결과값)
    const result = [];
    
    //1. arr1 에서 행의 값을 꺼낸다
    //2. arr2 에서 열의 값을 꺼낸다.
    for(let a = 0; a < arr1.length; a++){
        //(a는 arr1의 행의 값이다)
        let product = [];
        
        for(let b = 0; b < arr2[0].length; b++){
            let sum = 0;
            for(let c = 0; c < arr2.length; c++){
                //3. 행렬의 곱을 계산한다.
                sum += arr1[a][c] * arr2[c][b]
            }
            product.push(sum)
        }
        result.push(product)
    }
    
    //4. 값을 구해 return 한다.
    return result
}