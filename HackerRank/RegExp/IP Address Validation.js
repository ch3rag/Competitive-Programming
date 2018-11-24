//https://www.hackerrank.com/challenges/ip-address-validation/problem

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";

process.stdin.on("data", function (input) {

    _input += input;
});
function processData(input) {
    let numInput = Number(input[0]);
    let regex = new RegExp(/(^[0-2]?[0-9]?[0-9]\.[0-2]?[0-9]?[0-9]\.[0-2]?[0-9]?[0-9]\.[0-2]?[0-9]?[0-9]$)|(^[0-9a-f]+:[0-9a-f]+:[0-9a-f]+:[0-9a-f]+:[0-9a-f]+:[0-9a-f]+:[0-9a-f]+:[0-9a-f]+$)/g);

    for (let i = 1; i <= numInput; i++) {
        let match = input[i].match(regex);
        let answer;
        //console.log(match);
        if (!match) {
            answer = "Neither";
        } else if (match[0].length <= 15) {
            answer = "IPv4";
        } else {
            answer = "IPv6";
        }
        console.log(answer);
    }

}

process.stdin.on("end", function () {
    _input = _input.replace(/\s*$/g, "").split("\n").map(str => str.replace(/\s*$/g, ""));
    processData(_input);
});
