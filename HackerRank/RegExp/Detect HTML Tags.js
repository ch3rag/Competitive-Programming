//https://www.hackerrank.com/challenges/detect-html-tags/problem

function processData(input) {
    let regEx = new RegExp(/<\s*(\w+)/g);
    let setOfTags = new Set();
    while ((matches = regEx.exec(input)) != null) {
        setOfTags.add(matches[1]);
    }
    let arrayOfTags = [...setOfTags];
    arrayOfTags.sort();
    console.log(arrayOfTags.join(";"));
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
