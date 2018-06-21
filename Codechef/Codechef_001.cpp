https://www.codechef.com/problems/AMR15D

#include<iostream>
#include<algorithm>

int main() {
	
	int numHouses;
	int nimbda;
	std :: cin >> numHouses;
	int goldPlates[numHouses];
	for (int i = 0 ; i < numHouses ; i++) {	
		std :: cin >> goldPlates[i];		
	}
	
	std :: sort(goldPlates, goldPlates + numHouses);	
	
	int q;
	std :: cin >> q;
	int k[q];
	
	for(int i = 0 ; i < q ; i++) {
		std :: cin >> k[i];
	}
	
	for(int i = 0 ; i < q ; i++) {
		nimbda = 0;
		int left = 0;
		int right = numHouses;
		while(left < right) {
			nimbda += goldPlates[left++];
			right  -= k[i];			
		}
		std :: cout << nimbda << "\n";
	}
}

