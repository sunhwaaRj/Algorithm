function solution(sizes) {
    var answer = 0;
    var min = [];
    var max = [];
    // [0][0] / [0][1] 중에 작은거
    // [1][0] / [1][1] 중에 작은거
    // [2][0] / [2][1] 중에 작은거
    //...
    // [sizes.length - 1][0] / [sizes.length - 1][1] 중에 작은거
    // 작은거 끼리 비교해서 max 구하기
    // 큰거끼리 비교해서 max 구하기
    for(var i=0;i<sizes.length;i++){
        min.push(Math.min(sizes[i][0], sizes[i][1]));
        max.push(Math.max(sizes[i][0], sizes[i][1]))
    }
    min.sort((a, b) => b-a);
    max.sort((a, b) => b-a);
    
    return min[0]*max[0];
}