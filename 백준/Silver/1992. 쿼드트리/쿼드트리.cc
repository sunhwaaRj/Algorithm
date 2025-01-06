#include <bits/stdc++.h>
using namespace std;

int N;
char board[64][64]; // 각 요소에 대해 단일 문자로 입력받기

bool check(int x, int y, int n) { // 같은 수가 들어있는지 체크
	for (int i = x; i < x + n; i++)
		for (int j = y; j < y + n; j++) {
			if (board[x][y] != board[i][j]) return false;
		}
	return true;
}

void solve(int x, int y, int z) {
	if (check(x, y, z) == true) {
		cout << board[x][y];
		return;
	}
	cout << "(";
	int n = z / 2; // 반 나눠서 다시 탐색
	for (int i = 0; i < 2; i++)
		for (int j = 0; j < 2; j++)
			solve(x + i * n, y + j * n, n);

	cout << ")";
}

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);

	cin >> N;

	for (int i = 0; i < N; i++)
		for (int j = 0; j < N; j++)
			cin >> board[i][j];

	solve(0, 0, N);
}