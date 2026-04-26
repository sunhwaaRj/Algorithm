function solution(cards1, cards2, goal) {
    for(var i in goal){
        if(goal[i] == cards1[0])
            cards1.shift();
        else if(goal[i] == cards2[0])
            cards2.shift();
        else{
            return "No";
        }
        
    }
    return "Yes";
}