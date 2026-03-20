function solution(a, b, c, d) {
    var answer = 0;
    var arr = [a, b, c, d];
    var s = new Set(arr);
    var size = new Set(arr).size;
    
    switch(size) {
	    case 1:
		    answer = 1111*a;
		    break;
		  case 2:
			  // 각 숫자의 등장 횟수로 두가지 구분
			  const counts = [...new Set(arr)].map(n=> arr.filter(x => x===n).length);
			  var nums = [...s];

			  if (counts.includes(2)) { // 두개, 두개
					answer = (nums[0]+nums[1]) * Math.abs(nums[0]-nums[1])
				} else { // 세개, 한개
					const p = nums.find(n => arr.filter(x => x === n).length === 3);
			    const q = nums.find(n => n !== p);
				  answer = ( 10 * p  + q ) ** 2
			  }
			  break;
		  case 3:
			  var nums = [...s];
				const p = nums.find(n => arr.filter(x => x === n).length === 2);
				const [q, r] = nums.filter(n => n !== p);
				
				answer = q*r;
			  break;
		  case 4:
			  answer = Math.min(...arr);
    
    }
	    
    return answer;
}