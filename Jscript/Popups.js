// todo confire method

let fun = () =>{
    let bool = confirm("Are you Ready for Mock  !!!")
    if(bool){
        alert("Welcome to  Mock")
    }else{
        alert("moye moye")
    }
}
fun()

// todo : print name
let printName = () => {
    let userName = prompt("Enter your Name :")
    if(userName === "" || userName === null){
        let bool = confirm("Do you want to Exit ..!")
        if(bool){
            alert("Thank you")
        }else{
            printName()
        }
    }else{
        alert(`My name is ${userName}`)
    }
}
printName()

