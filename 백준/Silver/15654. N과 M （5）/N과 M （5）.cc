#include <bits/stdc++.h>
using namespace std;

int n, m;
int arr[10];
int asc[10]; // 입력받은 수가 오름차순 될 자리
bool isused[10001];

void func(int k) {
	if (k == m) {
		for (int i = 0; i < m; i++)
			cout << asc[arr[i]] << ' ';
		cout << '\n';
		return;
	}

	// 수를 입력받으므로 i는 asc 배열의 인덱스
	for (int i = 0; i < n; i++) {
		if (!isused[i] ) {
			arr[k] = i;
			isused[i] = 1;
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

	sort(asc, asc + n); // 배열 정렬

	func(0);
}