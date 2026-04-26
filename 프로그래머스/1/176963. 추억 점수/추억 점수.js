function solution(name, yearning, photo) {
    var answer = [];
    var score = 0;

    photo.map((array) => {
        name.map((n, i) => { // 이름 목록 전체 순회
            if (array.includes(n)) {
                score += yearning[i];
            } else {
                score += 0;
            }
        })
        answer.push(score);
        score = 0; // 다음 배열을 위해 초기화
    })
    return answer;
}