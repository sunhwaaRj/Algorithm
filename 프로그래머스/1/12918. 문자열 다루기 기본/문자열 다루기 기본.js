function solution(s) {
    // return Number.isInteger(+s) && (s.length === 4 || s.length === 6);
    return /^\d+$/.test(s) && (s.length === 4 || s.length === 6);

}