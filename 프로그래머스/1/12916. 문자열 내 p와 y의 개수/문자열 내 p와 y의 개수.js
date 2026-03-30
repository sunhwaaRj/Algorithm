function solution(s){
    var answer = true;
    var pnum = 0 ;
    var ynum = 0;
    for(var i of s.toLowerCase()){
        if(i == 'p') pnum++;
        else if(i == 'y') ynum++
    }

    return pnum == ynum;
}