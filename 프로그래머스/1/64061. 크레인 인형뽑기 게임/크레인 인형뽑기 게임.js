function solution(board, moves) {
    
    let stack = [];
    let cnt = 0;
    
    moves.forEach((move, index)=>{
        for(let i = 0; i < board.length; i++){
            if(board[i][move-1]!==0){
                stack.push(board[i][move-1]);
                board[i][move-1] = 0;
                
                if(stack.length > 1 && stack[stack.length-2] === stack[stack.length-1]){
                    stack.pop();
                    stack.pop();
                    cnt += 2;
                }
                break;
            } 
        }
    })
    return cnt
}
