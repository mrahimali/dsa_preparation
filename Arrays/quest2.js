// #######################   MAX and MIN element in Arry   ####################



// Using inbuilt function

function MaxMinInArray(arr){
    let max= Math.max(...arr)
    let min=Math.min(...arr)
    return {max, min}
}

// TC - O(n)



// *********************************************************************************



// By using Number.MAX_SAFE_INTEGER and Number.MIN_SAFE_INTEGER

// TC - O(n)



function MaxMin(arr){
    let min = Number.MAX_SAFE_INTEGER
    let max = Number.MIN_SAFE_INTEGER
    for (let i=0; i<arr.length; i++){
        if(arr[i]>max){
            max=arr[i]
        }
        if(arr[i]<min){
            min=arr[i]
        }
    }
    return {max, min}
}
let arr=[32,23,46,58,87];
// let ans=MaxMinInArray(arr)
let ans=MaxMin(arr)

console.log("Max : ", ans.max, ", Min : ", ans.min)
