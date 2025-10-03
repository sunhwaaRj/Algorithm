const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let a = "";

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];

    for(let i=0;i<str.length;i++){
        if(str[i] == str[i].toUpperCase()) // 대문자인 경우, 대문자로 바꿨을 때 기존과 동일한 경우
            a += str[i].toLowerCase();
        else
            a+= str[i].toUpperCase();
    }
    
    console.log(a);
});