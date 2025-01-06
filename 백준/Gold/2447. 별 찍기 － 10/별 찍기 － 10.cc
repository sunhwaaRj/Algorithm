#include <bits/stdc++.h>
using namespace std;

int n;
char board[2200][2200];

void solve(int x, int y, int z) {
	if (z == 1) {
		board[x][y] = '*';
		return;
	}

	int n = z / 3;

	for (int i = 0; i < 3; i++) {
		for (int j = 0; j < 3; j++) {
			if (i == 1 && j == 1) continue; // 사각형의 중간인 경우 건너뛰기
			solve(x + i * n, y + j * n, n);
		}
	}
}

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);

	cin >> n;
	for (int i = 0; i < n; i++)
		fill(board[i], board[i] + n, ' '); // 모든 칸 우선 공백으로 채우기

	solve(0, 0, n);
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < n; j++) {
			cout << board[i][j];
		}
		cout << '\n';
	}
}