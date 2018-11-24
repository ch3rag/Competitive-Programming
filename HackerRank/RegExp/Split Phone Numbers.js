//https://www.hackerrank.com/challenges/split-number/problem

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";

process.stdin.on("data", function (input) {
    _input += input;
});

function processData(input) {
    let numInput = Number(input[0]);
    let regex = new RegExp(/^(\d{1,3})[-\s](\d{1,3})[-\s](\d{4,10})$/);
    for (let i = 1; i <= numInput; i++) {
        let match = input[i].match(regex);
        console.log("CountryCode=" + match[1] + ",LocalAreaCode=" + match[2] + ",Number=" + match[3]);
    }
}
process.stdin.on("end", function () {
    _input = _input.replace(/\s*$/g, "").split("\n").map(str => str.replace(/\s*$/g, ""));
    processData(_input);
});
