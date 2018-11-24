//https://www.hackerrank.com/challenges/hackerrank-language/problem

let languages = ["C", "CPP", "JAVA", "PYTHON", "PERL", "PHP", "RUBY", "CSHARP", "HASKELL", "CLOJURE", "BASH", "SCALA", "ERLANG", "CLISP", "LUA", "BRAINFUCK", "JAVASCRIPT", "GO", "D", "OCAML", "R", "PASCAL", "SBCL", "DART", "GROOVY", "OBJECTIVEC"];


process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";

process.stdin.on("data", function (input) {

    _input += input;
});

function processData(input) {
    let numInput = Number(input[0]);
    let regex = new RegExp(/^\d+ (\w+)$/);
    for (let i = 1; i <= numInput; i++) {
        let match = input[i].match(regex);
        if (languages.includes(match[1])) {
            console.log("VALID");
        } else {
            console.log("INVALID");
        }
    }
}

process.stdin.on("end", function () {
    _input = _input.replace(/\s*$/g, "").split("\n").map(str => str.replace(/\s*$/g, ""));
    processData(_input);
});
