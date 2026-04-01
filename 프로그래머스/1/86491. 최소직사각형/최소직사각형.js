function solution(sizes) {
    var answer = [0, 0];
    
    const sort = sizes.map(([w, h]) => w < h ? [h, w]:[w, h]) // 작은 숫자가 나중
    sort.forEach(([w, h]) => { // 구조분해할당 사용
        if (w > answer[0]) answer[0] = w;
        if (h > answer[1]) answer[1] = h;
    })

    return answer[0]*answer[1];
}