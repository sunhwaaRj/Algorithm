function solution(n, control){
	var arr = [0, 0, 0, 0];
    var l = ["w", "s", "d", "a"];
    
	for(const c of control){
		if(c == 'w') arr[0]+=1;
		else if (c == 's') arr[1]+=1;
		else if (c == 'd') arr[2]+=1;
		else if (c == 'a') arr[3]+=1;
	}
	
	return n + arr[0] - arr[1] + arr[2]*10 - arr[3]*10
}