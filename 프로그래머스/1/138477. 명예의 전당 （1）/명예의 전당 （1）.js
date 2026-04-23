function solution(k, score) {
    var answer = [];
    var mj = [];
    for(var i in score){
        mj.push(score[i]);
        answer.push(mj.sort((a, b) => b-a).slice(0,k).at(-1));
    }
    return answer;
}