function solution(s) {
    let arr = s.split(' ');
    let resultArr = [];
    
    for (let word of arr) {
        let changeWord = "";
        for (let i = 0; i < word.length; i++) { 
            if (i % 2 === 0) {
                changeWord += word[i].toUpperCase();
            } else {
                changeWord += word[i].toLowerCase();
            }
        }
        resultArr.push(changeWord);
    }
    return resultArr.join(' ');
}