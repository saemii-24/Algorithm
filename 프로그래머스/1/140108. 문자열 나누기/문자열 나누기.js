function solution(s){
 let count = 0;
 let [thisArr, nextArr] = [[],[]];
    
    [...s].forEach((chars,index)=>{
        if(!thisArr[0]) thisArr.push(chars)
        else{
            if(thisArr[0]===chars) thisArr.push(chars)
            else nextArr.push(chars)
        }
        if(thisArr.length === nextArr.length){
            count += 1;
            [thisArr, nextArr] = [[],[]] 
        }
    })

    if(thisArr.length !== nextArr.length) return count + 1
    return s.length % 2 === 1 ? count + 1 : count 
}
