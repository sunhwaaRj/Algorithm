function solution(arr, queries) {
    var answer = [];
    const MIN = 1000000;
    for(const query of queries){
	    var min = MIN;
	    for(var i=query[0];i<=query[1];i++){
		    if(arr[i] > query[2] & arr[i] < min){
			    min = arr[i]
		    }
	    }
	    if(min === MIN) answer.push(-1);
	    else answer.push(min);
    }
    return answer;
}