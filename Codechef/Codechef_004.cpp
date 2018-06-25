//https://www.codechef.com/problems/XORAGN

#include <iostream>

int main() {
	int testCases;
	int N;
	std :: cin >> testCases;
	while(testCases--) {

		int result = 0;

		std :: cin >> N;

		int * a = new int[N];

		for(int i = 0 ; i < N ; i++) {

			std :: cin >> a[i];

		}

		for(int i = 0 ; i < N ; i++) {

			for(int j = 0 ; j < N ; j++) {

				result = (result ^ (a[i] + a[j]));
			}
		}

		std :: cout << result << std :: endl;
	}
	return 0;

}
