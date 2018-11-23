//https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays


function rotLeft(a, d) {

    let rotatedArr = a.slice();
    for (let i = 0; i < a.length; i++) {
        newPosition = (a.length - d + i) % a.length;
        rotatedArr[newPosition] = a[i];
    }
    return rotatedArr;
}

console.log(rotLeft([33, 47, 70, 37, 8, 53, 13, 93, 71, 72, 51, 100, 60, 87, 97], 13));