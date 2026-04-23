function solution(strings, n) {
    var answer = [];
    answer = strings.sort();
    
    return answer.sort((a, b) => a[n].charCodeAt() - b[n].charCodeAt());
}