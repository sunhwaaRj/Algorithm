function solution(s){
    var stack = 0;
    var arr = s.split('');
    // ) 으로 시작한다면 괄호가 만들어지는 조건이 아니기 때문에 무조건 false
    if(arr[0] == `)`) return false;
    
    for (var i in arr) {
        if (arr[i] == `(`) stack ++;
        else stack --;
        
        // stack 이 음수가 된다면 닫는 괄호가 더 많아지므로 false
        if (stack < 0) return false;
    }
    
    
    if (stack == 0) return true;
    else return false;
}