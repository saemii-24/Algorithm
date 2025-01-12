function solution(n) {
    const targetOneCount = n.toString(2).match(/1/g).length;

    let nextNumber = n + 1;
    while (true) {
        const nextOneCount = nextNumber.toString(2).match(/1/g).length;
        if (nextOneCount === targetOneCount) {
            return nextNumber;
        }
        nextNumber++;
    }
}
