https://www.hackerrank.com/challenges/utopian-identification-number/problem

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";

process.stdin.on("data", function (input) {

    _input += input;
});

function processData(input) {
    let numInput = Number(input[0]);
    let regex = new RegExp(/^[a-z]{0,3}[0-9]{2,8}[A-Z]{3,}$/);
    for (let i = 1; i <= numInput; i++) {
        let match = input[i].match(regex);
        console.log(match ? "VALID" : "INVALID");
    }
}
process.stdin.on("end", function () {
    _input = _input.replace(/\s*$/g, "").split("\n").map(str => str.replace(/\s*$/g, ""));
    processData(_input);
});
