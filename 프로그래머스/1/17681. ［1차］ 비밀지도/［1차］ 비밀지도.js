function solution(n, arr1, arr2) {
    let map1 = makeMap(arr1, n);
    let map2 = makeMap(arr2, n);

    let result = map1.map((row, index) => {
        return row.split('').map((char, idx) => {
            return char === '1' || map2[index][idx] === '1' ? '#' : ' ';
        }).join('');
    });

    return result
}

function makeMap(arr, n) {
    return arr.map((item) =>
        item.toString(2).padStart(n, '0')
    );
}
