//  #########################     MIN JUMP TO REACH END OF ARRAY   ###################




// Question 10 : Minimum no. of Jumps to reach end of an array

// Method : 1


// Note :- DO IT WITH OPTIMISED APPROACH


function minJumps(arr) {
  let count = 0;
  let i = 0;
  while (i < arr.length) {
    count++;
    i = i + arr[i];
  }
  return count;
}

let arr=[2,3,5,6,2,7,3,8,3,1,4];
let ans = minJumps(arr)
console.log(ans)
