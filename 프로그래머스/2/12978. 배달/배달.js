function solution(N, road, K) {
  var answer = 0;

  // N * N 배열
  const dist = Array.from({ length: N + 1 }, () => Array(N + 1).fill(Infinity));
  for (var i = 1; i <= N; i++) dist[i][i] = 0;

  for (const [a, b, c] of road) {
    // 같은 도로가 여러개면 짧은쪽
    dist[a][b] = Math.min(dist[a][b], c);
    // 반대방향
    dist[b][a] = Math.min(dist[b][a], c);

    // i에서 j 로 가는 사이에 있는 k마을
    for (var k = 1; k <= N; k++) {
      for (i = 1; i <= N; i++) {
        for (j = 1; j <= N; j++) {
          // i, k 거리랑 k, j 거리 합이 i, j 보다 작으면 i, j 거리에 그 합을 넣기
          if (dist[i][k] + dist[k][j] < dist[i][j])
            dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }

  return dist[1].filter((i) => i <= K).length;
}