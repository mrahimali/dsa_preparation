// ########################      CYCLIC ROTATE    ###############################


// Question 7: Write a program to cyclically rotate an array by n

function CyclicRotate(arr, k){
    let size = arr.length
    let newArray = [...arr]
    for(let i=0; i<arr.length; i++){
        arr[((i+k)%size)]=newArray[i]
    }
    return arr;
}



let arr =[1,2,3,4,5,6,7,8,9];
let k=3;
let ans = CyclicRotate(arr, k)
console.log(arr.join(" "))