function solution(genres, plays) {
    let genreObj = {};
    // 각 장르 재생수
    for (let i = 0; i < genres.length; i++) {
        if (!genreObj[genres[i]]) {
            genreObj[genres[i]] = { count: 0, songs: [] };
        }
        genreObj[genres[i]].count += plays[i];
        genreObj[genres[i]].songs.push({ index: i, plays: plays[i] });
    }

    Object.entries(genreObj).sort((a,b)=>b[1].count - a[1].count);
    for(let genKey of Object.keys(genreObj)){
            genreObj[genKey].songs.sort((a,b) => {
            if(b.plays == a.plays) return a.index - b.index
            else return b.plays - a.plays
        })
          if(genreObj[genKey].songs.length>=2) genreObj[genKey].songs.splice(2)
    }
    let sortGenre = Object.entries(genreObj).sort((a, b)=> b[1].count-a[1].count)
    
    //결과값 도출
    let result = [];
    for(let i = 0; i < sortGenre.length; i++){
        for(let j = 0; j < sortGenre[i][1].songs.length ; j++){
            result.push(sortGenre[i][1].songs[j].index)
        }
    }
    return result
}