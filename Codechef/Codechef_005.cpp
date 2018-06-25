//https://www.codechef.com/QCJAM10/problems/QCJ4
// THIS IS NOT THE OPTIMAL SOLUTION


#include <iostream>
#include <limits.h>


int r2 (int n) {
	int d1 = 0 , d3 = 0;
	for(int i = 1 ; i <= n ; i+=2) {
		if((i % 4 == 1) && (n % i == 0)) {
			d1++;
		}
		if((i % 4 == 3) && (n % i == 0)) {
			d3++;
		}
	}

	return (4 * (d1 - d3));
}


int hyp(int n) {
	int lhs = (8 * n + 4);
	for(long i = 1; i < LONG_MAX ; i++) {
		if(lhs == r2(i*i)) {
			return i;
		}
	}
}

int main() {
	std :: cout <<  hyp(2);
}
