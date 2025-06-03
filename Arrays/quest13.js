//  #########################    KADANE'S Algorithm   #########################



function LargestContSubArray2(arr){
    let res = arr[0];
    let maxEnding = arr[0];

    for (let i = 1; i < arr.length; i++) {
        maxEnding = Math.max(maxEnding + arr[i], arr[i]);
        
        res = Math.max(res, maxEnding);
    }
    return res;
}


let arr2=[4,-11,-2,8,7,-9,15,-8,2,-3,5]
let ans=LargestContSubArray2(arr2)
console.log(ans)