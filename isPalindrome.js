// Write your code below
let string = '00000000'
st1=[]
st2=[]
console.log(Array.from(string).length/2)
for(let  i = 0; i < Array.from(string).length/2; i++) {
    st1.push(Array.from(string)[i])
}
for(let i = Array.from(string).length-1; i >= (Array.from(string).length)/2; i--) {
    st2.push(Array.from(string)[i])
}

if(st1 = st2){
    console.log(true)
} else {
    console.log(false)
}