//https://www.hackerrank.com/challenges/detecting-valid-latitude-and-longitude/problem


function processData(input) {
    let regex = new RegExp(/\(\+?\-?(([0-9]|[1-8][0-9])(\.\d+)?|90\.0+|90), \+?\-?(([0-9]|[1-9][0-9]|1[0-7][0-9])(\.\d+)?|180\.0+|180)\)/g);
    for (let i = 1, max = input.length; i < max; i++) {
        let match = null;
        match = input[i].match(regex);
        console.log((match ? "Valid" : "Invalid"));
    }
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
