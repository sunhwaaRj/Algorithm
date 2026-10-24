function solution(maps) {
    const n = maps.length, m = maps[0].length;
    // 방문 여부 및 해당 칸까지 몇 칸 걸렸는지
    const dist = Array.from({length: n}, () => Array(m).fill(-1)); // -1 을 미방문한 곳으로
    // 상하좌우 순서
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    const queue = [[0, 0]];
    dist[0][0]= 1; // 처음 칸을 한칸으로 셈
    
    while(queue.length){
        const [x, y] = queue.shift(); // 현재 어디에
        
        // 도착점이면 n-1, m-1 과 비교 dist[x][y] 반환
        if(x === n-1 && y === m-1) return dist[x][y];
        
        for(var d=0;d<4;d++){
            // 후보칸 nx ny
            const nx = x + dx[d], ny = y+dy[d];
            // 건너뛰기 조건
            if (nx<0||ny<0||nx>=n||ny>=m) continue;
            if (dist[nx][ny]!== -1) continue;
            if (maps[nx][ny] === 0) continue;
            // 후보칸은 지금 값 + 1마ㄴ큼 더간 칸
            dist[nx][ny] = dist[x][y]+1;
            queue.push([nx, ny]);
            
        }
    }
    
    return -1;
}