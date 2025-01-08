#include <bits/stdc++.h>
using namespace std;

int n, m;
int arr[10];
int asc[10];
bool isused[10];

// 주어진 수에서 하나씩만 고르는 수열
void func(int k) {
	if (k == m) {
		for (int i = 0; i < m; i++)
			cout << arr[i] << ' ';
		cout << '\n';
		return;
	}

	// 중복인 수 확인하기 위한 임시 자리
	int tmp = 0;

	for (int i = 0; i < n; i++) {
		if (!isused[i] && tmp != asc[i]) { // 중복 확인
			arr[k] = asc[i];
			isused[i] = 1;

			tmp = arr[k]; // 추가

			func(k + 1);
			isused[i] = 0;
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
	func(0);
}