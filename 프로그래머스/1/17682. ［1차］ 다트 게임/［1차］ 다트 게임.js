function solution(dartResult) {
    const scoreArr = dartResult.match(/\d+[SDT][*#]?/g);

    let scores = [];
    scoreArr.forEach((segment) => {
        const score = parseInt(segment.match(/\d+/)[0]);
        const bonus = segment.match(/[SDT]/)[0];
        const option = segment.match(/[*#]/)?.[0] || null;

        let calculatedScore = 0;
        if (bonus === "S") calculatedScore = Math.pow(score, 1);
        if (bonus === "D") calculatedScore = Math.pow(score, 2);
        if (bonus === "T") calculatedScore = Math.pow(score, 3);

        if (option === "*") {
            calculatedScore *= 2;
            if (scores.length > 0) {
                scores[scores.length - 1] *= 2;
            }
        } else if (option === "#") {
            calculatedScore *= -1;
        }

        scores.push(calculatedScore);
    });

    return scores.reduce((acc, cur) => acc + cur, 0);
}
