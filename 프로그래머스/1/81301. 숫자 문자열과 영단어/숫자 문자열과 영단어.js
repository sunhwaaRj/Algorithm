function solution(s) {
    var dict = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    dict.forEach((i, idx) => {
        s = s.replaceAll(i, idx); // i 를 idx 로 바꿔라
    })
    return +s;
}