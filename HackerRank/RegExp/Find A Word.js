//https://www.hackerrank.com/challenges/find-a-word/problem

function processData(input) {
    let numSentences = Number(input[0]);
    let sentences = input.slice(1, numSentences + 1);
    let numQueries = Number(input[numSentences + 1]);
    let queries = input.slice(numSentences + 2);
    for (let i = 0; i < numQueries; i++) {
        let result = 0;
        let query = "\\b" + queries[i] + "\\b";
        let regex = new RegExp(query, "g");
        for (let j = 0; j < numSentences; j++) {
            let matches = sentences[j].match(regex);
            result += matches ? matches.length : 0;
        }
        console.log(result);
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
