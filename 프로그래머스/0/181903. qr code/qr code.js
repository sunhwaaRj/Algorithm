function solution(q, r, code) {
    var answer = '';
    for(var i in code){
	    if(i % q == r) answer += code[i];
    }
    return answer;
}