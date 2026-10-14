//! Object 

//let obl = {}
// console.log(obj);
// console.log(typeof obj);


// todo : creating object using direct literals

// let car = {
//     carname : "Omni",
//     carcolor : "Red",
//     carModel : 1999,
//     isActive : true
// }
// console.log(car);

//? accessing the property from the object 
// todo : dot operator
// console.log(car.carname);
// todo : subscript operator
// console.log(car["carModel"]);

//! Modificati0on of object prperties (CRUD : create read update delete)
// todo : create an object

// let person = {
//     fname : "Dinga",
//     age : 20,
//     place : "GOA"
// }
// console.log(`${person.fname} is from ${person.place}`);

// todo : add the property to the object
//? objectName.newPropertyName = newValue
// person.Iname = "Raja"
// console.log(person);
// todo : update the property to the object
//? objectName.newPropertyName = newValue
// person.age = 22
// console.log(person);
// todo : delete the property to the object
//? syntax : delete objectName.PropertyName
// delete person.place
// console.log(person);

//! crerate object property with space

// let person = {
//     "first name" : "Dinga",
//     "last name" : "Raja",
//     "age" : 22
// }
// console.log(person);
// console.log(person["first name"]);

//! Nested object

// let person = {
//     fname : "Dinga",
//     Iname : "Raja",
//     age : 20,
//     address : {
//         city : "Goa",
//         Pincode : 515001
//     }

// }
// console.log(person);
// console.log(person.address.Pincode);

//! create Method inside the object
//? create local function inside the object
let user1 = {
    fname : "Dinga",
    sayHi : function(){
        console.log("Helooo");
    }

}
user1.sayHi()

//? todo : create the method inside using shortHand way (ES6)
let user2 = {
    fname : "Dinga",
    sayH(){
        console.log("Helloo");
    }
}
user2.sayH()
