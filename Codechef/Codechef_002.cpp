https://www.codechef.com/status/H1

#include <iostream>

struct node {
	int number;
	node * next;
};
 
char permutations[99999999] = {0}; 
// char to be memory efficient
int board[9];
int powers[10] = {100000000,10000000,1000000,100000,10000,1000,100,10,1};
char primes[18] = {0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1};
int fromNumber;
node * front;
node * rear;
 
void swap(int p1, int p2) {
	
	int diff = board[p2] - board[p1];
	int nextNum = fromNumber + diff * powers[p1] - diff * powers[p2];
	int nextNumRound = nextNum/10;
	if(permutations[nextNumRound] == 0) {
		//std :: cout << nextNum << "\n";
		permutations[nextNumRound] = permutations[fromNumber/10] + 1;
		node * temp = (struct node *) malloc (sizeof(struct node));
		temp->number = nextNum;
		temp->next = NULL;
		rear->next = temp;
		rear = temp;
	}
}
 
int main() {
	
	permutations[12345678] = 1;
	node temp;
	temp.number = 123456789;
	temp.next = NULL;
	front = rear = &temp;
	
	while(front != NULL) {
		int num = fromNumber = front->number;
		for(int i = 8 ; i >= 0 ; i--) {
			board[i] = num%10;
			num /= 10;
		}
		
		if(primes[(board[0] + board[1])]) swap(0,1);
		if(primes[(board[0] + board[3])]) swap(0,3);
		if(primes[(board[1] + board[2])]) swap(1,2);
		if(primes[(board[1] + board[4])]) swap(1,4);
		if(primes[(board[2] + board[5])]) swap(2,5);
		if(primes[(board[3] + board[6])]) swap(3,6);
		if(primes[(board[3] + board[4])]) swap(3,4);
		if(primes[(board[4] + board[5])]) swap(4,5);
		if(primes[(board[4] + board[7])]) swap(4,7);
		if(primes[(board[5] + board[8])]) swap(5,8);
		if(primes[(board[6] + board[7])]) swap(6,7);
		if(primes[(board[7] + board[8])]) swap(7,8);
		
		front = front->next;
	} 	
	int testCases;
	
	std :: cin >> testCases;
	
	for(int i = 0 ; i < testCases ; i++) {
		int test = 0;
		int digit;
		for(int j = 0 ; j < 9 ; j++) {
			std :: cin >> digit;
			test = (test * 10) + digit;
		}
		test /= 10;
		if(permutations[test]) std :: cout << permutations[test] - 1 << "\n";
		else std :: cout << -1 << "\n";
		
	}
	return 0;
} 
