function solution(n, words) {
    let obj = {}; 
    let prev = "";
    
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let player = (i % n) + 1;
        let turn = Math.ceil((i + 1) / n);

        if (obj[word]) return [player, turn];
        if (i > 0 && word[0] !== prev) return [player, turn];

        obj[word] = true;
        prev = word[word.length - 1];
    }

    return [0, 0];
}
