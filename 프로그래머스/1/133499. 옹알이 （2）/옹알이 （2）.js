function solution(babbling) {
  let count = 0;

  for (const babble of babbling) {
    if (processBabble(babble)) {
      count += 1; 
    }
  }

  return count;
}

function processBabble(babble) {
  const noregex = /^(ayaaya|yeye|woowoo|mama)/; // 중복 발음은 불가
  const regex = /^(aya|ye|woo|ma)/;

  if (noregex.test(babble)) {
    return false;
  }

  if (regex.test(babble)) {
    const newBabble = babble.replace(regex, ""); 
    return processBabble(newBabble); 
  }

  return babble === "" ? true : false;
}
