function solution(n, lost, reserve) {
    let lostObj = {}; // 잃어버린 학생
    let reserveObj = {}; // 여분 가진 학생 (빌려줄 수 있는 학생)

    for (let lo of lost) lostObj[lo] = 1;
    for (let re of reserve) reserveObj[re] = 1;

    // 여분 가진 학생이 잃어버린 경우, 두 객체에서 삭제함
    for (let lo of lost) {
        if (lostObj[lo] && reserveObj[lo]) {
            delete lostObj[lo];
            delete reserveObj[lo];
        }
    }
    
    

    for (let lo in lostObj) {
        let prev = parseInt(lo) - 1;
        let next = parseInt(lo) + 1; 

        if (reserveObj[prev]) {
            delete lostObj[lo];
            delete reserveObj[prev];
        } else if (reserveObj[next]) {
            delete lostObj[lo];
            delete reserveObj[next];
        }
    }

    return n - Object.keys(lostObj).length;
}
