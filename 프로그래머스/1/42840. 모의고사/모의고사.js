function solution(answers) {
    // (규칙을 정의한다)
    const member1 = [1, 2, 3, 4, 5];
    const member2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const member3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    // 4. 각 멤버들의 점수를 받아온다.
    const membersScore = [member1, member2, member3].map((member, index) => checkScore(member, answers));

    // 5. 각 멤버들의 점수 중 가장 큰 값을 확인한다.
    const maxScore = Math.max(...membersScore);

    // 6. 해당 값을 가지고 있는 멤버의 번호를 받아온다.
    const maxScoreMember = membersScore.reduce((acc, cur, index) => {
        if (cur === maxScore) acc.push(index + 1); 
        return acc; 
    }, []);

    // 7. 오름차순 정렬해서 return한다.
    return maxScoreMember;
}

function checkScore(member, answers) {
    // (정답 갯수를 카운트 한다.)
    let score = 0;

    // 1. 문제의 정답과 멤버의 답의 규칙을 비교해 정답을 카운트 한다.
    // 2. 문제가 많을 경우 멤버의 답 규칙을 반복한다.
    for (let a = 0; a < answers.length; a++) {
        if (answers[a] === member[(a % member.length)]) score++;  // 올바른 인덱스 계산
    }

    // 3. 점수를 return 한다.
    return score;
}
