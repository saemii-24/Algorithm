function solution(want, number, discount) {
    // 날짜 세기
    let cnt = 0;
    // 정현이가 원하는 품목: 수량 obj 만들기
    let wantobj = {};
    for (let [index, fruit] of want.entries()) {
        wantobj[fruit] = number[index];
    }
    
    // 열흘 안에 정현이가 원하는 품목이 전부 있는 날짜를 세야 한다.
    for (let i = 0; i <= discount.length - 10; i++) {
        let tempObj = { ...wantobj }; 
        let checkDiscount = discount.slice(i, i + 10);
        
        for (let check of checkDiscount) {
            if (tempObj[check]) {
                tempObj[check] -= 1;
                if (tempObj[check] === 0) delete tempObj[check];
            }
        }
        
        if (Object.keys(tempObj).length === 0) {
            cnt++;
        }
    }
    
    return cnt;
}
