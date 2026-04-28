function solution(answers) {
    var answer = [];
    var oo = [1, 2, 3, 4, 5];
    var tw = [2, 1, 2, 3, 2, 4, 2, 5];
    var th = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    var one = answers.filter((a, i) => a === oo[i%5]).length;
    var two = answers.filter((a, i) => a === tw[i%8]).length;
    var three = answers.filter((a, i) => a === th[i%10]).length;
    
    var max = Math.max(one, two, three);
    if(one === max) answer.push(1);
    if(two === max) answer.push(2);
    if(three === max) answer.push(3);
    
    return answer;
}