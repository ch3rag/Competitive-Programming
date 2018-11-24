https://www.hackerrank.com/challenges/ide-identifying-comments/problem

function processData(input) {
    let match = [];
    let regex = new RegExp(/(\/\/.+)|(\/\*+(.|\n)*?\*+\/)/, "gm")
    //console.log(input);
    //console.log(regex);
    while ((match = regex.exec(input))) {
        console.log(match[0].replace(/\n\s+/gm,"\n"));
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
