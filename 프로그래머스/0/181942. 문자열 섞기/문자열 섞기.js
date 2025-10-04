function solution(str1, str2) {
    var answer = '';

    for(var i=0;i<str1.length;i++){
        for(var j=0;j<str1.length;j++){
            if(i==j)
                answer += str1[i] + str2[j]
        }
    }
    
    return answer;
}