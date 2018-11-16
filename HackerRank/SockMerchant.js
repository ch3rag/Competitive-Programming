// https://www.hackerrank.com/challenges/sock-merchant/problem

function sockMerchant(n, ar) {
    let count =  0;
    ar.sort((a, b) => {
       return a - b; 
    });
    
    let previous = ar[0];
    
    for(let i = 1 ; i < n ; i++) {
        if(ar[i] === previous) {
            count++;
            previous = undefined;
        } else {
            previous = ar[i];
        }
    }
    return count;
}
