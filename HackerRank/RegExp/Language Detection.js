//https://www.hackerrank.com/challenges/programming-language-detection/problem

function processData(input) {
    let java = new RegExp(/(public static void main|Exception)/g);
    let c = new RegExp(/(int main|void main)/g);
    let python = new RegExp(/(def main:|print |_+\w+_+)/);
    if (input.match(java)) {
        console.log("Java");
    } else if (input.match(c)) {
        console.log("C");
    } else if (input.match(python)) {
        console.log("Python");
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
