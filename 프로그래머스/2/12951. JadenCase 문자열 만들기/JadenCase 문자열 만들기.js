function solution(s) {
    return s.replace(/\b\w/g, (match) => match.toUpperCase())
            .replace(/\B\w+/g, (match) => match.toLowerCase());
}
