function solution(my_string, is_suffix) {
    var arr = [];
    for(var i=0;i<my_string.length;i++){
	    arr.push(my_string.slice(i));
    }
    
    if(arr.includes(is_suffix)) return 1;
    else return 0;
}