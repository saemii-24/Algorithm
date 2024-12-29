function solution(X, Y) {
    let mapX = new Map();
    let mapY = new Map();
    
    for (let alphaX of X) {
        mapX.set(alphaX, (mapX.get(alphaX) || 0) + 1);
    }
    
    for (let alphaY of Y) {
        mapY.set(alphaY, (mapY.get(alphaY) || 0) + 1);  
    }

    let result = [];

    for (let [key, countX] of mapX) {
        if (mapY.has(key)) {
            let countY = mapY.get(key);
            let minCount = Math.min(countX, countY);
            for (let i = 0; i < minCount; i++) {
                result.push(key);
            }
        }
    }

    if (result.length === 0) {
        return "-1";
    }
    
    if (result.every(num => num === '0')) {
        return "0";
    }

    result.sort((a, b) => b - a);  
    return result.join("");
}
