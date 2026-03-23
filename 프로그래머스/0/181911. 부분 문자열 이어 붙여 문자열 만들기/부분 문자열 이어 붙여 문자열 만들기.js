function solution(my_strings, parts) {
    var answer = '';
    for(var i=0;i<my_strings.length;i++){
        var s = parts[i][0];
        var e = parts[i][1];
        
        answer += my_strings[i].slice(s, e+1);
    }
    return answer;
}