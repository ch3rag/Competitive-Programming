//https://www.hackerrank.com/challenges/uk-and-us/problem

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";

function processData(input) {
    //console.log("Processing...");
    let numLines = Number(input[0]);
    let sentences = input.slice(1, numLines + 1);
    let numQueries = Number(input[numLines + 1]);
    let queries = input.slice(numLines + 2);
    //console.log(numLines, sentences, numQueries, queries);
    for (let i = 0; i < numQueries; i++) {
        let result = 0;
        let query = "\\b" + queries[i].slice(0, queries[i].length - 2) + "(z|s)e\\b";
        let regex = new RegExp(query, "g");
        //console.log(regex);
        for (let i = 0; i < numLines; i++) {
            let len = sentences[i].match(regex);
            result += len ? len.length : 0;
        }
        console.log(result);
    }
}



process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    _input = _input.replace(/\s*$/g, "").split("\n").map(str => str.replace(/\s*$/g, ""));
    processData(_input);
});
