// #################   Move all negative to One Side ######################


// Question 5 : Move all negative numbers to beginning and positive to end with constant extra space


//  using sort function

function Move(arr){
    arr.sort((a,b)=>a-b)
    return arr
}


let arr1=[-1,-3,4,-1,-8,2,1,-4,-9,4,3]
let ans1 = Move(arr1)
console.log(ans1.join(" "))





//  using ' TWO POINTER APPROACH '

function MoveNegative(arr){
    let lo=0;
    let hi=arr.length;
    while(lo<=hi){
        if(arr[lo]<0){
            lo++;
        }else if(arr[hi]>0){
            hi--;
        }else{
            [arr[lo], arr[hi]]=[arr[hi], arr[lo]];
            lo++;
            hi--;
        }
        
    }
    return arr
}


let arr=[-1,-3,4,-1,-8,2,1,-4,-9,4,3]
let ans = MoveNegative(arr)
// console.log(ans.join(" "))


// TC - O(n)
// SC - O(1)


// Try with quick sort 