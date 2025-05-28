// ###################   SORT 0,1,2 #########################

// Question 4 : Given an array arr[] containing only 0s, 1s, and 2s. Sort the array in ascending order. You need to solve this problem without utilizing the built-in sort function.




// 1st METHOD 


function SortZeroOneTwo(arr){
    let c0=0;
    let c1=0;
    let c2=0;
    let n=arr.length;
    for (let i=0; i<n; i++){
        if (arr[i]==0){
            c0++;
        }
        if(arr[i]==1){
            c1++;
        }
        if(arr[i]==2){
            c2++;
        }
    }

    for (let i=0; i<c0; i++){
        arr[i]=0;
    }
    for (let i=c0; i<c0+c1; i++){
        arr[i]=1;
    }
    for (let i=c0+c1; i<c0+c1+c2; i++){
        arr[i]=2;
    }
    return arr;
}

let arr=[1,2,1,0,0,2,0,1,0,1,2,1];
// let ans= SortZeroOneTwo(arr)
// console.log(arr.join(" "))



// 2nd METHOD   ' Dutch National Flag Algorithm '
function SortZeroOneTwo2(arr){
    let lo =0;
    let mid=1;
    let hi = arr.length
    while(mid<=hi){
       if(arr[mid]===0){
        [arr[lo], arr[mid]]=[arr[mid], arr[lo]]
        lo++;
        mid++;
       }
       if(arr[mid]==1){
        mid++;
       }

       if(arr[mid]===2){
        [arr[hi], arr[mid]]=[arr[mid], arr[hi]]
        hi--;
       }
    }
    return arr
}

let arr2=[1,2,1,0,0,2,0,1,0,1,2,1];
let ans2= SortZeroOneTwo(arr2)
console.log(arr2.join(" "))