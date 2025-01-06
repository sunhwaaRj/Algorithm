#include <bits/stdc++.h>
using namespace std;

const int MAX = 1024 * 3 + 2;

int n;
char board[MAX][MAX * 2 - 1];

void fill_star(const int& x, const int& y) { // 기본 삼각형 (0,2) (1,1) (1,3) (2,0) (2,1) (2,2) (2,3) (2,4)
    board[x][y] = '*';
    board[x + 1][y - 1] = '*', board[x + 1][y + 1] = '*';

    for (int i = y - 2; i <= y + 2; ++i) {
        board[x + 2][i] = '*';
    }
}

void func(const int& x, const int& y, const int& s) {
    if (s == 3) { // 제일 작은 삼감형
        fill_star(x, y);
        return;
    }

    int ns = s / 2;
    // 세 개의 작은 삼각형으로 나눠 그리기.
    func(x, y, ns); // 현위치
    func(x + ns, y - ns, ns); // 아래 왼쪽
    func(x + ns, y + ns, ns); // 아래 오른쪽
}

int main() {
    ios_base::sync_with_stdio(0);
    cin.tie(0);

    cin >> n;

    func(0, n - 1, n);

    for (int i = 0; i < n; ++i) {
        for (int ii = 0; ii < n * 2 - 1; ++ii) {
            if (board[i][ii] == '*')
                cout << '*';
            else
                cout << ' ';
        }
        cout << "\n";
    }
}