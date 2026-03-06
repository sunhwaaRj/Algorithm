function solution(code) {
    var answer = '';
    var mode = false;
    for (var i=0;i<code.length;i++){
        if (code[i]==1) mode = !mode;
        else if (mode === true && i%2!==0) answer += code[i];
        else if (mode === false && i%2===0) answer += code[i];
    }
    
    if (answer === '') answer = 'EMPTY'
    return answer;
}