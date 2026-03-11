function solution(arr, queries) {
    return queries.map(([s, e, k]) => {
	    let result = -1
	    for(var i=s;i<=e;i++){
		    let v = arr[i];
		    if(v <= k) continue; //값이 k 보다 작거나 같으면 의미 없음
		    // result 가 -1 이면 v 값, 아니면 result 와 현재 값 비교하여 작은것
		    result = result === -1 ? v : Math.min(result, v);		    
	    }
	    return result ;
    })
}