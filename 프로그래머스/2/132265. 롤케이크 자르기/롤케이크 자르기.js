function solution(topping) {
    let me = new Set();
    let brother = new Map();

    for (let i = 0; i < topping.length; i++) {
        const t = topping[i];
        brother.set(t, (brother.get(t) || 0) + 1);
    }

    let count = 0;

    for (let i = 0; i < topping.length; i++) {
        const t = topping[i];

        me.add(t);

        brother.set(t, brother.get(t) - 1);
        if (brother.get(t) === 0) {
            brother.delete(t);
        }

        if (me.size === brother.size) {
            count++;
        }
    }

    return count;
}
