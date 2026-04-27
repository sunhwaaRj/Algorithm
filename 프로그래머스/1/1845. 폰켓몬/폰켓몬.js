function solution(nums) {
    var set = new Set(nums);
    if (set.size > nums.length / 2)
        return nums.length / 2;
    else return set.size
}