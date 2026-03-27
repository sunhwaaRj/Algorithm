function solution(s, n) {
    var answer = '';
    // 문자 -> 아스키코드 -> +n -> 문자
    var arr = s.split("");
    for(var i =0; i< arr.length;i++){
        // arr[i] 이 공백이 아닐 때만 +n 처리
        if (arr[i] !== ' '){
            if(arr[i] >= 'A' && arr[i] <= 'Z'){ // A 65 Z 90
                arr[i] = String.fromCharCode(((arr[i].charCodeAt() - 65 + n) % 26) + 65);
            }
            else if(arr[i] >= 'a' && arr[i] <= 'z'){ // a 97 z 122
                arr[i] = String.fromCharCode(((arr[i].charCodeAt() - 97 + n) % 26) + 97);
            }
        }
        answer += arr[i];
    }
    
    return answer;
}