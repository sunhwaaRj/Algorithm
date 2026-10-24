function solution(m, n, board) {
  var total = 0;
  const grid = board.map((row) => row.split(""));

  // 4칸짜리 없을 때까지 반복
  while (true) {
    // 지울 칸 표시
    const marked = Array.from({ length: m }, () => Array(n).fill(false));
    // 모든 (i, j)에서 2×2가 같은지 확인 (빈칸은 제외!)
    for (var i = 0; i < m - 1; i++) {
      for (var j = 0; j < n - 1; j++) {
        // 제일 구석으로 가면 안되니까 -1까지
        const c = grid[i][j];
        if (
          c !== null &&
          grid[i + 1][j] === c &&
          grid[i][j + 1] === c &&
          grid[i + 1][j + 1] === c
        ) {
          //null이 아니고 네 칸이 같다면 일단 표시
          marked[i][j] =
            marked[i + 1][j] =
            marked[i][j + 1] =
            marked[i + 1][j + 1] =
              true;
        }
      }
    }

    // 표시된 칸 수 세고 비우기
    let count = 0;
    // marked가 true인 칸: grid를 빈칸으로 바꾸고 count 증가
    for (var i = 0; i < m; i++) {
      for (var j = 0; j < n; j++) {
        if (marked[i][j] === true) {
          grid[i][j] = null;
          count++;
        }
      }
    }

    //console.log(count);

    if (count === 0) break; // 지울 게 없으면 종료
    total += count;

    // 각 행마다 위에서 아래 순서로 뽑아놓고 push
    // 아래서부터 채워넣기 pop
    for (var j = 0; j < n; j++) {
      const stack = [];
      for (var i = 0; i < m; i++) {
        if (grid[i][j] !== null) stack.push(grid[i][j]);
      }

      for (var i = m - 1; i >= 0; i--) {
        grid[i][j] = stack.length ? stack.pop() : null; // stack 에 남아있으면 할당
      }
    }
  }

  return total;
}