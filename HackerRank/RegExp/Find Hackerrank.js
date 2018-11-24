// https://www.hackerrank.com/challenges/find-hackerrank/problem
// Print 1 if the conversation starts with hackerrank
// Print 2 if the conversation ends with hackerrank
// Print 0 if the conversation starts and ends with hackerrank
// Print - 1 if none of the above.

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";

process.stdin.on("data", function (input) {
    _input += input;
});

function processData(input) {
    let numInput = Number(input[0]);
    let caseOne = new RegExp(/^hackerrank/g);
    let caseTwo = new RegExp(/hackerrank$/g);
    let caseZero = new RegExp(/^hackerrank$/g);
    for (let i = 1; i <= numInput; i++) {
        if (input[i].match(caseZero)) {
            console.log("0");
        } else if (input[i].match(caseOne)) {
            console.log("1");
        } else if (input[i].match(caseTwo)) {
            console.log("2");
        } else {
            console.log("-1");
        }
    }
}
process.stdin.on("end", function () {
    _input = _input.replace(/\s*$/g, "").split("\n").map(str => str.replace(/\s*$/g, ""));
    processData(_input);
});
