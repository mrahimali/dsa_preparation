// ############################   Reverse the array  ########################



// Two pointer approach
function ReverseArray(arr){
    let st=0;
    let end = arr.length-1;
    while(st<=end){
        // let temp = arr[st]
        // arr[st]=arr[end]
        // arr[end]=temp
        [arr[st], arr[end]]=[arr[end], arr[st]]
        st++;
        end--;
    }
    return arr;
}

let arr=[1,2,3,4,5,6,7,8,9];
let ans = ReverseArray(arr);
console.log(arr.join(" "))
