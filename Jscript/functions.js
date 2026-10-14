//! General / Named Function

//? function with out parameters & with out Resturn statements

function example(){
    console.log("Welcome to Js");
}
// example()
// example()

//? function with parameters & with out Resturn statements

function username(fname){
    console.log(`hello ${fname}`);
}
// username(`Dinga`)
// username(`Dingi`)
// username(`Donga`)

//? wap to add numbers using general function without parameters

// function addnum(){
//     let a = 22
//     let b = 22
//     let sum = a + b
//     console.log(`${a} + ${b} = ${sum}`);
// }
// addnum()

//? wap to add numbers using general function with parameters

function addnum(a , b){
    let sum = a + b
    console.log(`${a} + ${b} = ${sum}`);
}
// addnum(22,22)
// addnum(44,44)

//? function without parameters & with Resturn statements

function classroom(){
    let stud1 = "simba"
    console.log(stud1);
    return stud1
}
// let x = classroom()
// console.log(x);

// todo : example 2

function sender(){
    let msg = "Get Out -->"
    return msg
}
// let receiver = sender()
// console.log(receiver);

//? function with parameters & with Resturn statements
// todo : check even or odd number

function checknum(num){
    if(num % 2 == 0)
        return `${num} is even`
    else
        return `${num} is odd`
}
// let res = checknum(prompt("enter the num:"))
// console.log(res);

//! Default Parameters

function demo(text){
    console.log(text);
}
// demo() // o/p --> undefined

//! how to change the default value of the parameter

function num(val = 0){
    console.log(val);
}
// num()

function text(val = "parameter is not mentioned"){
    console.log(val);
}
// text()

function demo(a,b,c = 44){
    b = "number is"
    console.log(a,b,c);
}
// demo("Hamilton")

//! programs :
//? wap to print even numbers fron start to end using general function with parameter

function demo(start,end){
    console.log(`even numbers fron ${start} - ${end} are`);
    for(let i=start;i<=end;i++){
        if(i %2 == 0)
            console.log(i);
    }
}
// demo(prompt("enter the start num:"),prompt("enter the end num:"))

// //? wap to print even and odd numbers fron start to end using general function with parameter & return statement

// function evenodd(num=Number()){
//     return (num % 2 == 0) ? `${num} is even` : `${num} is odd`
// }
// let res = evenodd(10)
// console.log(res);

// console.log(evenodd(15));
// console.log(evenodd());

//! Anonymous function
//? function with out parameters and with out return statements

// let fun = function(){
//     console.log("hello");
// }
// fun()

//? function with parameters and with out return statements

// let fun = function(a){
//     console.log("hello");

// }
// fun(1)

//? function with out parameters and with return statements

// let fun = function(){
//     let name = "hello"
//     return name
// }
// console.log(fun());

//? function with parameters and with return statements

// let fun = function(a){
//     a = "hello"
//     return a
// }
// console.log(fun(1));

//? function with parameters and with return statements

// let addnum = function(a=Number(),b=Number()){
//     let sum = a + b
//     return `${a} + ${b} = ${sum}`
// }
// let res = addnum(10 , 30)
// console.log(res);

// let res1 = addnum(22 , 22)
// console.log(res1);

//! Arrow function
//? function without parameters and without return statements

// let arrow = () =>{
//     console.log("hello");
// }
// arrow()
//? function with parameters and without return statements
// let arrow = (val) =>{
//     val = "hello"
//     console.log(val);
// }
// arrow(2)
//? function without parameters and with return statements/
// let arrow = () => {
//     let name = "hello"
//     return name
// }
// console.log(arrow());
//? function with parameters and with return statements

// let arrow = (msg) => {
//     console.log(msg);
//     return "this is returning"
// }
// console.log(arrow("hello"));

//! Special Behaviour

//~ Example 1 : in arrow function if we have only one line statement then curly braces is optional
// let arrow = () => console.log("I Love Javascript");
// arrow()
// console.log(typeof arrow);

//~ In arrow function if we have only one parameter then parenthesis is optional instead of paranthesis use underscore

// let arrow1 = _ => {
//     console.log("arrow 3");
// }
// arrow1()

//~ in arrow functions if we have only return statement then return keyword & flower  braces is optional

// let arrow4 = _ => "this is crazyyyyyyyyy"
// console.log(arrow4());

//todo : Example program : WAP to check even or odd number using arrow function with parameter & return value
// let checkEvenOdd = (num) => {
//     return num % 2 == 0 ? `even` :`odd`
// }
// let res = checkEvenOdd(15)
// console.log(res);

// let checkEvenOdd = (num) => num % 2 == 0 ? `even` :`odd`
// console.log(checkEvenOdd(10));

//? 
// (function demo(){
//     console.log("Hello , I'm in SIF");
// })()

// (function (){
//     console.log("Hello , I'm in SIF");
// })()

// (()=>console.log("Hello , I'm in SIF")
// )()

// (_ =>console.log("Hello , I'm in SIF"))()

// let res = ((num)=>){
//     return num%2 == 0
// }


// let wor = () => {
//     return 100
// }
// let sum = (a,b) => {
//     let res = a + b
//     console.log(res);
// }
// sum(wor(), 200)        

// let wor = () => {
//     return 100
// }
// let sum = (a,b) => {
//     let res = a() + b     //alter names for "wor" and "a" are same 
//     console.log(res);
// }
// sum(wor, 200)

//! todo senario

// let sum = (a , b) => {
//     let res = a() + b   // calling the function
//     console.log(res);
// }
// sum(()=>{
//     return 300
// } , 200)

//!  sum

