// setTimeout(()=>{
//     console.log("hello");
// },2000)

// let fun =  (()=> {
//     console.log("Bye..!");
// })
// setTimeout(fun , 2000)

// let fun1 = (()=> {
//     console.log("Welcome")
// })
// clearTimeout()

let num = 1
let printNumbers = () => {
    console.log(num++);
}
let resetNum  = () =>{
    num = 1
}
