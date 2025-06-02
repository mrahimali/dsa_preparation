let findDuplicate = function(nums) {
    let st = new Set()
    let i=0;
    while(i<nums.length){
        if (st.has(nums[i])){
            return nums[i]
        }else{
            st.add(nums[i])
        }
        i++;
    }
};


// Note : This approach does not work for array where all elements are same like arr=[3,3,3,3,3];
// var findDuplicate = function(nums) {
//     let size=nums.length;
//     let ans=0
//     for(let i=0; i<size; i++){
//         ans = ans ^ nums[i] ^ i
//     }

//     return ans

// };


let nums= [1,2,3,4,4,5];
let ans = findDuplicate(nums)
console.log(ans)