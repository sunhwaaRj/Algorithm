function solution(numbers, target) {
    var answer = 0;
    
    // 지금 위치를 idx 로 판단
    function fn(idx, sum){
        // 끝까지 돌렸을 때
        if(idx === numbers.length) {
            if(sum === target) answer++;
            return; // 끝까지 가고 fn 탈출
        }
        
        // 더하기 +numbers[idx]
        fn(idx+1, sum+numbers[idx]);
        
        // 빼기 -numbers[idx]
        fn(idx+1, sum-numbers[idx]);
    }
    
    // 실행
    fn(0, 0);
    return answer;
}