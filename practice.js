function a(x){
    console.log("a function")
    x()
}

function b(){
    console.log("b function")
}
a(b)
// b()



console.log("food is ordered")

setTimeout(()=>{
    console.log("food is getting ready")
},3000)

setTimeout(()=>{
    console.log("food is ready")
},6000)