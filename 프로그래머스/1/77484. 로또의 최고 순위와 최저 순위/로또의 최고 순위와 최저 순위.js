function solution(lottos, win_nums) {
    var [n, m] = [0, 0];
    var [min, max] = [0, 0];
    for(var i of lottos){
        if(win_nums.includes(i)) n++;
        if(i === 0) m++;
    }
    
    min = 7-m-n;
    max = 7-n;
    
    if(min >= 7) min = 6;
    if(max >= 7) max = 6;
        
    return [min, max];
}