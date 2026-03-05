function solution(num_list) {
    var last = 0;
    var arr = [];

    if(num_list.at(-1) > num_list.at(-2)) last = num_list.at(-1) - num_list.at(-2);
    else last = 2 * num_list.at(-1);
    
    arr = num_list.concat(last);
    return arr;
}