//https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem

function jumpingOnClouds(c) {
    let n = c.length;
    let numJumps = 0;
    let i = 0;
    while(i < n - 1) {
        if(c[i+2] === 0) {
            i += 2;
        } else {
            i++;
        }
        numJumps++;
    }
    console.log(numJumps);
    return numJumps;
}