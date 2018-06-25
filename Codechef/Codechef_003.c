//https://www.codechef.com/problems/CLFIBD


#include <stdio.h>
#include <string.h>

int check (int a , int b , int c) {
	if(a == (b+c)) {
		return 0;
	} else if(b == (a+c)) {
		return 0;
	} else if(c == (a+b)) {
		return 0;
	} else return 1;
}

int main() {
	int testCases;
	printf("Enter Number Of Test Cases : ");
	scanf("%d", &testCases);
	char testString[10][10000];

	for(int i = 0 ; i < testCases ; i++) {
		scanf("%s", testString[i]);
	}

	for(int i = 0 ; i < testCases ; i++) {

		int  charCount[26] = {0}, distinctChar = 0, sequence[26] = {0}, flag = 1;

		for(int len = strlen(testString[i]) - 1 ; len >= 0 ; len--) {
			charCount[(testString[i][len] - 97)]++;
		}
		
		
		for(int i = 0 ; i < 26 ; i++) {
			if(charCount[i] != 0) {
				sequence[distinctChar++] = charCount[i];
			}
		}

		if(distinctChar < 3) {
			printf("Dynamic\n");
		} else {

			for(int i = 2 ; i < distinctChar ; i++) {

				if(check(sequence[i], sequence[i-1], sequence[i-2])) {
					printf("Not\n");
					flag = 0;
					break;
				}

			}

			if(flag == 1) {

			printf("Dynamic\n");

			}
		}
	}
}
