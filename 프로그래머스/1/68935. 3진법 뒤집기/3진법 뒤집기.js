function solution(n) {
    // 3진법 변환 및 배열 뒤집기
    var answer = [...n.toString(3).split("")].reverse();   
    return parseInt(answer.reduce((acc, cur) => acc+cur, ""), 3);
}