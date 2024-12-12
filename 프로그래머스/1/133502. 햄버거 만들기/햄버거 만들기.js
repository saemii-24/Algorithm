function solution(ingredient) {
    let stack = []; //1231 순서대로 쌓일 stack
    let cnt = 0;
  
    for(let i = 0; i<ingredient.length; i++){
      stack.push(ingredient[i]);
      if(stack.slice(-4).join('')==='1231'){
        cnt++;
        stack.splice(-4);
      }
    }
    return cnt
}