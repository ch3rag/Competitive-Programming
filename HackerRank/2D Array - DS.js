//https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays


function hourglassSum(arr) {

    let hourSums = [];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let sum = 0;
            for (let y = 0; y < 3; y++) {
                for (let x = 0; x < 3; x++) {
                    if (!((y == 1 && x == 0) || (y == 1 && x == 2))) {
                        sum += arr[y + i][x + j];
                    }
                }
            }
            hourSums.push(sum);
        }
    }
    return Math.max(...hourSums);
}

let arr = [ [1,1,1,0,0,0],
            [0,1,0,0,0,0], 
            [1,1,1,0,0,0], 
            [0,0,2,4,4,0], 
            [0,0,0,2,0,0], 
            [0,0,1,2,4,0]
        ];

console.log(hourglassSum(arr));