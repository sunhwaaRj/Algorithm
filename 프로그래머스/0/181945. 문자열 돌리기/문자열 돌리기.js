const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let arr = [];

rl.on('line', function(line){
    arr=[line];    
}).on('close', function(){
    let ans = [];
    
    ans = arr[0].split('');
    
    for(let i = 0;i < ans.length;i++)
        console.log(ans[i]);
})