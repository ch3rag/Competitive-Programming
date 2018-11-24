//https://www.hackerrank.com/challenges/detect-the-email-addresses/problem


function processData(input) {
    let regex = new RegExp(/\b([A-Za-z0-9\._-]+@[A-Za-z0-9_-]+\.[A-Za-z\.]+)\b/g);
    let results = new Set();
    for (let i = 1, max = input.length; i < max; i++) {
        let match = [];
        while ((match = regex.exec(input[i])) !== null) {
            results.add(match[0]);
        }
    }
    let resultArr = [...results];
    resultArr.sort();
    console.log(resultArr.join(";"));
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
