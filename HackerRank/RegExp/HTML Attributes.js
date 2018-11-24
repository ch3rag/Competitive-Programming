//https://www.hackerrank.com/challenges/html-attributes/problem

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";

process.stdin.on("data", function (input) {
    _input += input;
});

function processData(input) {
    let numInput = Number(input[0]);
    let tags =  {};
    let regex = new RegExp(/<\s*(\w+)|(\w+)=("|').*?("|')/g);
    for (let i = 1; i <= numInput; i++) {
        let match = [];
        let tag;
        while ((match = regex.exec(input[i]))) {
            if (match[1]) {
                tag = match[1];
                if (!tags[tag]) {
                    tags[tag] = new Set();
                }
            } else if(match[2]) {
                tags[tag].add(match[2]);
            }
        }
    }
    tagsSorted = {};
    Object.keys(tags).sort().forEach(value => {
        tagsSorted[value] = tags[value];
    });
    for (let [key, value] of Object.entries(tagsSorted)) {
        console.log(key + ":" +[...value].sort().join(","));
    }
}
process.stdin.on("end", function () {
    _input = _input.replace(/\s*$/g, "").split("\n").map(str => str.replace(/\s*$/g, ""));
    processData(_input);
});
