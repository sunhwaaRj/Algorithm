function solution(babbling) {
    var answer = 0;
    const can = ["aya", "ye", "woo", "ma"];
    
    babbling.forEach((b, idx) => {
        for(var i=0;i<can.length;i++){
            // 두 번 연속으로 들어있으면 탈출
            if(b.includes(can[i].repeat(2))) break;
            b = b.split(can[i]).join(" ");
        }
        
        if(b.split(" ").join("").length === 0) answer++;
    })
    return answer;
}