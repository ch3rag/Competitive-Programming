//https://www.hackerrank.com/challenges/detect-html-links/problem

function processData(input) {
    let regEx = new RegExp(/<a href="(\S+)".*?>(<(.*?)>)?\s*([\w\s\._,/]*)(<\/\3>)?<\/a>/g);
    while ((matches = regEx.exec(input)) != null) {
        console.log((matches[1] ? matches[1].trim() : "") + "," + (matches[4] ? matches[4].trim(): ""));
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

