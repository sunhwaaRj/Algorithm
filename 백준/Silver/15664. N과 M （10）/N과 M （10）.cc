#include <bits/stdc++.h>
using namespace std;

int n, m;
int arr[10];
int asc[10];

// 조합

void func(int k, int st) {
	if (k == m) {
		for (int i = 0; i < m; i++)
			cout << arr[i] << ' ';
		cout << '\n';
		return;
	}

	int tmp = 0;	
	for (int i = st; i < n; i++) {
		if (tmp != asc[i]) {
			arr[k] = asc[i];
			tmp = arr[k];
			func(k + 1, i + 1); // 시작점도 함께 옮기기
		}
	}
}

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);

	cin >> n >> m;
	for (int i = 0; i < n; i++)
		cin >> asc[i];

	sort(asc, asc + n);
	func(0,0);
}