function solution(my_string, overwrite_string, s) {
    var answer = '';
    // 1. my string 의 0부터 s-1 까지 앞의 것 추출
    var my1 = my_string.substr(0, s);
    
    // 2. s 부터 overwrite_string 의 길이만큼 오버라이트된 것으로 교체
    // 2-1. 마지막 남은 것 세어서
    var remain = my_string.length-(s + overwrite_string.length) // = 1 뒤에서부터 1개를 추출
    
    // 2-2. remain 개수만큼 추출
    var my2 = my_string.substr(-remain)
        
    // 2-3. remain 이 0이 아닌 경우만 추출한 값 붙이기
    if(remain == 0){
        answer = my1 + overwrite_string
    } else {
        answer = my1 + overwrite_string + my2
    }
    
    return answer;
}