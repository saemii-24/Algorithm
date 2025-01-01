function solution(video_len, pos, op_start, op_end, commands) {
    let [nLen, nPos, nStart, nEnd] = [video_len, pos, op_start, op_end].map((item)=>changeTime(item))

    for (let command of commands) {
        if (nPos >= nStart && nPos <= nEnd) nPos = nEnd;
        if (command === 'next') {
            nPos = nPos + 10 > nLen ? nLen : nPos + 10;
            if (nPos >= nStart && nPos <= nEnd) nPos = nEnd;
        } else {
            nPos = nPos - 10 < 0 ? 0 : nPos - 10;
            if (nPos >= nStart && nPos <= nEnd) nPos = nEnd;
        }
    }

    let [min, sec] = [Math.floor(nPos / 60), nPos % 60];
    sec = sec === 0 ? "00" : sec.toString().padStart(2, '0');

    return min.toString().padStart(2, '0') + ":" + sec;
}

function changeTime(strTime) {
    let [min, sec] = strTime.split(':').map((item) => Number(item));
    return sec + (min * 60);
}