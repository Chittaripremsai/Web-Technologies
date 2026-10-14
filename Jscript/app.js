let changeContent = () => {
    let elem = document.getElementById("header")
    elem.InnerText = " Welcome to React Js"
    elem.style.color = "red"
}

let applystyle = () => {
    let text = document.getElementsByClassName("text")
    text[0].style.background  = "orange"
    text[1].style.color  = "blue"
    text[2].style.cssText  = `background:green; color:white`
}

let head = document.getElementById('header')
console.log(head);

let txt = document.getElementsByClassName("text")
console.log(txt);

let anchortags = document.getElementsByTagName('a')
console.log(achorTags);

let fname = document.getElementsByName("fname")
console.log(fname);

console.log(document.querySelector("#header"));
console.log(document.querySelector(".text"));

console.log(document.querySelectorAll("#header"));
console.log(document.querySelectorAll(".text"));

let demoExample = () => {
    let demo = document.querySelector("#demo")
    console.log(demo.InnerText);
    console.log(demo.textContent);
    console.log(demo.innerHTML);
}

let onoffbtn = () => {
    let btn = document.getElementById("btn")
    if(btn.innerText === 'ON'){
        btn.innerText = 'OFF'
        btn.style.cssText = `color:red ; border : solid 2px red`
    }else{
        btn.innerText = 'ON'
        btn.style.cssText = `color:green ; border : solid 2px green`
    }
}
