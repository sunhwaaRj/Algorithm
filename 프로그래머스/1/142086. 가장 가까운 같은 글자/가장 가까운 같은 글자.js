function solution(s) {
    var answer = [];
    for(var i in s){
        var found = false;
        for(var j=i-1;j>=0; j--){
            if (s[j] == s[i]){
                answer.push(i-j);
                found = true;
                break;
            }
        }
        if(!found) answer.push(-1);
    }
    return answer;
}