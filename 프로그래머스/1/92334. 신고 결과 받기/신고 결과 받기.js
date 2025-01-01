function solution(id_list, report, k) {
    let user = {};
    let myrep = {};

    for (let id of id_list) {
        user[id] = {};
        myrep[id] = {};
    }

    let rep = {};
    for (let reportUser of report) {
        let [me, you] = reportUser.split(' ');

        if (!user[me][you]) {
            user[me][you] = 1;
            myrep[you] = myrep[you] || {};
            myrep[you][me] = 1;
        }
    }

    for (let key of Object.keys(myrep)) {
        rep[key] = Object.keys(myrep[key]).length;
    }

    let stop = [];
    for (let key of Object.keys(rep)) {
        if (rep[key] >= k) stop.push(key);
    }

    let result = [];
    for (let stopUser of id_list) {
        let cnt = 0;
        for (let countUser of stop) {
            if (user[stopUser][countUser]) cnt++;
        }
        result.push(cnt);
    }

    return result;
}
