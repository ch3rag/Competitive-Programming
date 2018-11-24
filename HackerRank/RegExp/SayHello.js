//https://www.hackerrank.com/challenges/saying-hi/problem

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";

process.stdin.on("data", function (input) {

    _input += input;
});

function processData(input) {
    let numInput = Number(input[0]);
    let regex = new RegExp(/^[hH][iI]\s[^dD]/);
    for (let i = 1; i <= numInput; i++) {
        let match = input[i].match(regex);
        if (match) {
            console.log(input[i]);
        }
    }
}
process.stdin.on("end", function () {
    _input = _input.replace(/\s*$/g, "").split("\n").map(str => str.replace(/\s*$/g, ""));
    processData(_input);
});
