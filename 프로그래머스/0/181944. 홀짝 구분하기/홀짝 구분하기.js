const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    outpur: process.stdout,
})

let input = [];

rl.on('line', function(line){
    input = [line]
}).on('close', function(){
    let ans = ""
    ans = input[0]
    
    if(Number(ans) % 2 == 0){
        console.log(ans, "is even");
    } else {
        console.log(ans, "is odd");
    }
})