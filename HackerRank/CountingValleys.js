//https://www.hackerrank.com/challenges/counting-valleys/problem

function countingValleys(n, s) {
    let valleys = 0;
    let counter = 0;
    let insideValley =  false;
    for(let i = 0 ; i < n ; i++) {
        let char = s.charAt(i);
        if(counter < 0 && !insideValley) {
            insideValley = true;
            valleys++;
        }
        
        if(char === "D") {
            counter--;
        } else {
            counter++;
        }
        
        if(counter === 0) {
            insideValley = false; 
        }
    }
    return valleys;
}