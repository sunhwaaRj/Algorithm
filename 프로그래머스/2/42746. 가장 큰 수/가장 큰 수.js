function solution(numbers) {
    const str = numbers.map(String);
    
    // 오름차순
    str.sort((a, b) => Number(b+a) - Number(a+b));
    
    const answer = str.join("");    
    
    return answer[0] === '0' ? '0' : answer;
}