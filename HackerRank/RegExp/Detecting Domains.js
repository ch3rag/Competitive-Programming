//https://www.hackerrank.com/challenges/detect-the-domain-name/problem

function processData(input) {
    let regex = new RegExp(/((http|https):\/\/(www\.)?([A-Za-z0-9_@-]+\.[A-Za-z0-9@\.-]+)\/?)/g);
    let results = new Set();
    for (let i = 1, max = input.length; i < max; i++) {
        let match = [];
        while ((match = regex.exec(input[i])) !== null) {
            results.add(match[4]);
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
