//https://www.hackerrank.com/challenges/new-year-chaos/problem

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the minimumBribes function below.
function isSorted(a) {
    for (let i = 0, max = a.length - 1; i < max; i++) {
        if (a[i] > a[i + 1]) {
            return false;
        }
    }
    return true;
}
function minimumBribes(q) {
    let bribes = [];
    while (true) {
        for (let i = 0, max = q.length - 1; i < max; i++) {
            if (q[i] > q[i + 1]) {
                switch (bribes[q[i]]) {
                    case undefined: bribes[q[i]] = 1; break;
                    case 1: bribes[q[i]] = 2; break;
                    case 2: console.log("Too chaotic"); return;
                }
                [q[i], q[i + 1]] = [q[i + 1], q[i]];
                if (isSorted(q)) {
                    console.log(bribes.reduce((sum, current) => current === undefined ? sum : sum + current));
                    return;
                }
                break;
            }
        }
    }
}

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const q = readLine().split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q);
    }
}
