function solution(a, b) {
    var v1 = String(a);
    var v2 = String(b);
    
    return Math.max(Number(v1+v2), Number(v2+v1))
}