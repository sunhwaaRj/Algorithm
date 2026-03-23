function solution(intStrs, k, s, l) {
    var answer = [];
    for(let i of intStrs){
	    var c = + i.slice(s, s+l);
	    if(c > k) answer.push(c);
    }
    return answer;
}