#include <bits/stdc++.h>
using namespace std;

int n, m;
int arr[10];
int asc[10];

// 중복 없는 조합
void func(int k) {
	if(k == m) {
		for (int i = 0; i < m; i++)
			cout << asc[arr[i]] << ' ';
		cout << '\n';
	}

	int st = 0;
	if (k != 0) st = arr[k - 1] + 1;

	for (int i = st; i < n; i++) {
		arr[k] = i;
		func(k + 1);
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