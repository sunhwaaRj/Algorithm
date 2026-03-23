function solution(number) {
    var sum = 0;
    var numArr = number.split("").map((a) => {
        return Number(a);
    })
    
    numArr.map((a) => {
        sum+=a;
    })
    
    return sum % 9;
}