#include <bits/stdc++.h>
using namespace std;

int n, m;
int arr[10];
int asc[10];

// 중복 있는 순열
void func(int k) {
	if (k == m) {
		for (int i = 0; i < m; i++)
			cout << asc[arr[i]] << ' ';
		cout << '\n';
		return;
	}

	for (int i = 0; i < n; i++) {
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