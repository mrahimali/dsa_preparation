// #################   UNION and INTERSECTION of two array   #########################


// Question 6 : Find the Union and Intersection of the two sorted arrays.



// Method 3 : Using set()

// Some Bugs.....detect and resolve it 

function MergeArray(arr1, arr2){
    let ans= new Set();
    let i=0;
    let j=0;
    while(i<arr1.length || j<arr2.length){
        if(arr1[i]==arr2[j]){
            ans.add(arr1[i])
            i++;
            j++;
        }else if(arr1[i]<arr2[j]){
            ans.add(arr1[i]);
            i++;
        }else{
            ans.add(arr2[j]);
            j++;
        }
    }

    let arr=[...ans];
    return arr  
}

let arr4 = [1,2,2,2,4,6]
let arr5 = [3,5,7,8,8,8,9,9,10]

let ans = MergeArray(arr4, arr5)
console.log(ans.join(" "));





// ###################################################################################


// Method 2 : duplicate elements available


// function MergeArray(arr1, arr2){
//     let i=0;
//     let j=0;
//     let ans =[];
//     while(i<= arr1.length || j<=arr2.length){
//         if(ans.includes(arr1[i])){
//             i++;
//         }else if(ans.includes(arr2[j])){
//             j++;
//         }else if(arr1[i]==arr2[j]){
//             ans.push(arr1[i])
//             i++;
//             j++;
//         }else if(arr1[i]<arr2[j]){
//             ans.push(arr1[i]);
//             i++;
//         }else{
//             ans.push(arr2[j]);
//             j++;
//         }
//     }
//     return ans;  
// }

// let arr4 = [1,2,2,2,4,6]
// let arr5 = [3,5,7,8,8,8,9,9,10]

// let ans = MergeArray(arr4, arr5)
// console.log(ans.join(" "));


// TC - O((n + m)^2)


// ###################################################################################

// Method 1    using inbuilt concat()  method



// let arr1 = [1,2,2,2,4,6]
// let arr2 = [7,8,9,10]

// let arr3= arr1.concat(arr2)
// console.log(arr3.join(" "))

// TC - O(n+m)