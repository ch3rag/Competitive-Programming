//https://www.hackerrank.com/challenges/stack-exchange-scraper/problem

function processData(input) {
    let regex = new RegExp(/<a href="\/questions\/(\d+).*?" class="question-hyperlink">(.*?)<\/a>(.|\n)*?class="relativetime">(.+)?<\/span>/gm);
    let match =  [];
    while ((match = regex.exec(input))) {
        console.log(match[1] + ";" + match[2] + ";" + match[4]);
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
