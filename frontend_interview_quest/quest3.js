let a= 'I am rahim a software developer';

let arr= a.split(" ")
let st=0;
let end = arr.length-1

while(st<end){
    let temp =arr[st]
    arr[st]=arr[end]
    arr[end]=temp
    st++;
    end--;
}

let ans= arr.join(" ")
console.log(ans)