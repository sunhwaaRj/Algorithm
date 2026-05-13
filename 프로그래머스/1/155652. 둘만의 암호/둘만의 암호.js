function solution(s, skip, index) {
    var alphabets = 'abcdefghijklmnopqrstuvwxyz'.split("").filter((e) => !skip.includes(e))
    
    
    return [...s].map(c => {
        const cur = alphabets.indexOf(c); // c 의 위치 찾기
        return alphabets[(cur + index) % alphabets.length];
    }).join("");
}