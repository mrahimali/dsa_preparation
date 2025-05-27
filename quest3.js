// #####################       kth Max Element in an Array      ######################

// Question : Given an array arr[] and an integer k where k is smaller than the size of the array, your task is to find the kth smallest element in the given array.


function kthLargest(arr, k){
    arr.sort((a,b)=>a-b);
    console.log(arr)
    let kthElement = arr[arr.length-k]
    return kthElement;
}

let arr=[21,43,23,54,56,76,32,43];
let k=3;
const ans = kthLargest(arr, k)
console.log(ans)


