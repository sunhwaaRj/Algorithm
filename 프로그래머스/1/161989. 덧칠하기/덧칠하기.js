function solution(n, m, section) {
    var flag = 0;
    var count = 0;
    
    for(var i of section){
        if(i > flag - 1){
            flag = i + m;
            count++;
        }
    }
    return count;
}