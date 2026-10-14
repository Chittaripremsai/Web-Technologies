//! todo if else:
// let val = Number(prompt('enter the number:'))
// console.log(val,typeof val);
// if(val > 0 && val < 10){
//     if(val % 2 ==0){
//         console.log("its an even");
//     }else{
//         console.log("its an odd");
//     }
// }else{
//     console.log(`${val} is not a number`);
// }

// let val = Number(prompt('enter the number:'))
// if(Number.isNaN(val)){
//     console.log("it's not a number");
// }else{
//     if(val%2 == 0){
//         console.log(`${val} is a even`);
//     }else{
//         console.log(`${val} is a odd`);
//     }
// }

// let val = Number(prompt('enter the number:'))
// if(Number.isNaN(val)){
//     console.log("it's not a number");
// }else{
//     if(val > 0){
//         console.log(`${val} is a +ve`);
//     }else if(val < 0){
//         console.log(`${val} is a -ve`);
//     }else{
//         console.log(`${val} is neither +ve nor -ve number`);
//     }
// }

// for(let i=1 ; i<=50;i++){
//     // console.log("i love js");/
//     document.write(`<div> ${i+1}. i love js </div>`)
// }

// let val1 = Number(prompt('enter the number:'))
// let val2 = Number(prompt('enter the number:'))

// if(Number.isNaN(val1) || Number.isNaN(val2)){
//     console.log("it is not a number value");
// }else{
//     for(let i=val1 ; i<=val2 ; i++){
//         if(i % 2== 0)
//             console.log(i);
// }
// }

// let val1 = Number(prompt('enter the number:'))
// let val2 = Number(prompt('enter the number:'))

// if(Number.isNaN(val1) || Number.isNaN(val2)){
//     console.log("it is not a number value");
// }else{
//     if(val1 < val2){
//         console.warn(`odd numbers from ${val1} - ${val2}`);
//         for(let i=val1 ; i<=val2 ; i++){
//             if(i % 2!= 0)
//                 console.log(i);}
// }
// }

//todo : wap to sum of numbers from 1-10
// let sum = 0
// for(let i=1; i<=10; i++){
//     sum = sum + i;
// }
// console.log(sum);

// let val1 = Number(prompt('enter the number:'))
// let val2 = Number(prompt('enter the number:'))
// let sum = 0
// if(Number.isNaN(val1) || Number.isNaN(val2)){
//     console.log("it is not a number value");
// }else{
//     for(let i=val1; i<=val2; i++){
//     document.write(`+ ${i}`)
//     sum += i;
// }
// // console.log(sum);
// document.write(` = ${sum}`);
// }

// todo = multiplication table

// let val = Number(prompt('enter the number:'))

// let prod = 1
// for(let i=1; i<=10; i++){
//     console.log(`${val} * ${i} = ${val*i}`);
// }

let val = Number(prompt("Enter the number:")); 
let fact = 1; 

for (let i = 1; i <= val; i++) { 
    fact *= i; // Fixed: Multiply by i instead of 1
} 

console.log(`The factorial of ${val} is: ${fact}`);

// todo 