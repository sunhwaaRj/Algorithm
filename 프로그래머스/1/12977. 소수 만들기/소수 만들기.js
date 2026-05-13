function isPrime(n){
    if (n % 2 === 0) return false;
    for(var i=3;i<=Math.sqrt(n);i+=2){
        if(n % i == 0) // 나누어 떨어지면 = 소수가 아니면
            return false;
    }
    
    return true;
}

function solution(nums) {
    var answer = 0;
    
    for(var i=0;i<nums.length;i++){
        for(var j=i+1;j<nums.length;j++){
            for(var k=j+1;k<nums.length;k++){
                var sum = 0;
                sum = nums[i]+nums[j]+nums[k];
                if (isPrime(sum)) answer++;
            }
        }
    }
    
    
    return answer;
}