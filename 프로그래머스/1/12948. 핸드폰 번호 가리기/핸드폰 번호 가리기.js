function solution(phone_number) {
    // 숫자 길이 String(phone_number).length;
    // 길이-4 만큼 * 반복
    // 마지막에 phone_number.slice(-4) 더하기
    return '*'.repeat(String(phone_number).length - 4) + phone_number.slice(-4);
}