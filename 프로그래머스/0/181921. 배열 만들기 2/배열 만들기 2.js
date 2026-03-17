function solution(l, r) {
    var answer = [];
    var a = "";
    for(var i=l;i<=r;i++){
	    var j=0, total = 0;
	    while(j!==i.toString().length){
		    if(i.toString()[j]==="5" || i.toString()[j]==="0") total++;
			  
			  if(total == i.toString().length) { // 모든 자리수가 5또는 0으로 이루어졌을때만
				  answer.push(i);
					break;  
				}
				j++;
		  }      
    }
    
    return (answer.length == 0 ? [-1] : answer);
}