function solution(answers) {
    var answer = [];
    var [one, two, three] = [0, 0, 0];
    var oo = [1, 2, 3, 4, 5];
    var tw = [2, 1, 2, 3, 2, 4, 2, 5];
    var th = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    for(var i in answers){
        if(answers[i] == oo[i%5]) one++;
        if(answers[i] == tw[i%8]) two++;
        if(answers[i] == th[i%10]) three++;
    }
    
    var max = Math.max(one, two, three);
    var arr = [one, two, three];
    for(var j in arr){
        if(arr[j] == max) answer.push(+j+1);
    }
    
    return answer;
}