function solution(my_string, m, c) {
    var answer = '';
    
    for(var i in my_string){
        if(i % m == c-1) answer+= my_string[i];
    }
    
    return answer;
}