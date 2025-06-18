let a = "Hi my name is rahim , i am a software developer at zmq new delhi"

let obj={}
for(let x of a){
    if(obj[x]){
        obj[x] +=1
    }else{
        obj[x]=1
    }
}
console.log(obj)