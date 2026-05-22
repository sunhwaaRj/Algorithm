function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];
    
  const min = lottos.filter((x) => win_nums.includes(x)).length;
  const max = lottos.filter((x) => x === 0).length + min;

  return [rank[max], rank[min]];
}