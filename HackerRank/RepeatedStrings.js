//https://www.hackerrank.com/challenges/repeated-string/problem


function repeatedString(s, n) {
    let nModLen = n % s.length;
    let numA = s.match(/a/g);
    let occurances = 0;
    let i = 0;
    while(nModLen-- > 0) {
        if(s.charAt(i++) === "a") {
            occurances++;
        }
    }
    return occurances + Math.floor(n / s.length) * (numA === null? 0 : numA.length);
}