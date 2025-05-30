//  ######################    largest SUM Subarray   #########################



// Question 8: find Largest sum contiguous Subarray



//  Method 1 : Brute force

function LargestContSubArray(arr){
    let sum=arr[0]
    for(let i=0; i<arr.length; i++){
        curSum=0;
        for(let j=i; j<arr.length; j++){
            curSum = curSum + arr[j]
            sum = Math.max(sum, curSum)
        }
    }
    return sum
}


let arr=[4,-11,-2,8,7,-9,15,-8,2,-3,5]
let ans=LargestContSubArray(arr)
// console.log(ans)



// Method 2 : KADANE'S Algorithm 


function LargestContSubArray2(arr){
    let sum=arr[0]
    let curSum =arr[0];
    for(let i=0; i<arr.length; i++){
        curSum = Math.max(curSum+arr[i], arr[i])
        sum = Math.max(sum, curSum)
    }
    return sum
}


let arr2=[4,-11,-2,8,7,-9,15,-8,2,-3,5]
let ans2=LargestContSubArray2(arr2)
console.log(ans)
