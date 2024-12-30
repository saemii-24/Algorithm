function solution(survey, choices) {
    let obj = {};
    ["A","N","C","F","M","J","R","T"].forEach((item)=>obj[item] = 0);
    
    for(let i = 0; i < survey.length; i++){
        score(survey[i], choices[i], obj)
    }
    
    return surveyResult(obj)
}

function score(survey, choice, obj){
    let [sur1, sur2] = survey.split('');
    
    //점수 넣어주기
    if(choice===1) obj[sur1] += 3
    else if(choice ===2) obj[sur1] += 2
    else if(choice ===3) obj[sur1] += 1
    else if(choice ===5) obj[sur2] += 1
    else if(choice ===6) obj[sur2] += 2
    else if(choice ===7) obj[sur2] += 3
}

function surveyResult(obj){
    let result = ""
    
    console.log(obj)

    obj["R"] >= obj["T"] ? result += 'R' : result += 'T'
    obj["C"] >= obj["F"] ? result += 'C' : result += 'F'
    obj["J"] >= obj["M"] ? result += 'J' : result += 'M'
    obj["A"] >= obj["N"] ? result += 'A' : result += 'N'
    
    return result
}