function solution(a, b) {
  var nums = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var days = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];

  var date = 0;
  for (var i = 0; i < a; i++) {
    date += nums[i];
  }
  date += b;

  return days[date % 7];
}