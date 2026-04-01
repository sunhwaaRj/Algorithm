function solution(s) {
    var answer = '';
    var arr = s.split(' ');
    arr.map((x) => {
        for(i in x.split('')){ // i 는 index
            if (i % 2 == 0) answer += x.split('')[i].toUpperCase();
            else answer += x.split('')[i].toLowerCase();
        }
        answer += ' ';        
    });
    return answer.slice(0, -1);
}