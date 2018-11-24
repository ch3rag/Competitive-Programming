//https://www.hackerrank.com/challenges/hackerrank-tweets/problem


function processData(input) {
    let regex = new RegExp(/hackerrank/gi);
    let sum = 0;
    for (let i = 1, max = input.length; i < max; i++) {
        let match = null;
        match = input[i].match(regex);
        match ? sum++ : 0;
    }
    console.log(sum);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    _input = _input.replace(/\s*$/, "").split("\n").map(str => str.replace(/\s*$/, ""));
    processData(_input);
});
