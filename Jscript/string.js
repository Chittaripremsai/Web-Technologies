//! todo : startswith() , endswith()

// let str = "Java script"
// console.log(str);
// console.log(str.startsWith("java"));
// console.log(str.startsWith('a',1));
// console.log(str.endsWith("t"));
// console.log(str.endsWith('i',8));

//! todo : touppercase() , tolowercase()

// let str = "Java script is a dynamic language"
// console.log(str);
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

//! todo : indexof() & lastindexof()
/**
 * indexOf() used to check index posidition of the character & returns the index of the first occurance of a specified value.
 * lastIndexOf() used to check index position of the character & returns the index of the last occurance
 * if the data is present it returns index value & if data is not present in it return -1 value.
 */
// let str = "Java script is a dynamic language"
// console.log(str);
// console.log(str.indexOf('a'));      //1
// console.log(str.lastIndexOf("a"));  //30
// console.log(str.indexOf("z"));      //-1

// let str = "Java script is a dynamic language"
// console.log(str);
// console.log(str.includes('a'));      //true
// console.log(str.includes("z"));      //false

// todo : subString() , substr() , sclice()
/**
 * all these methods are use to extacts characters between two indexes (startIndex to endingIndex -1) ,but they behave diffently.
 * string.substring(startIndex, endIndex); //? it supports only +ve indexes
 * 
 */

// let str = "Java script is a dynamic language"
// console.log(str);
// console.log(str.substring(5,12));      
// console.log(str.substring(17,25)); 

// console.log(str.slice(0,4));    
// console.log(str.slice(-8,));
// console.log(str.slice(0,));
// console.log(str.slice(-6,6));

//! todo : repeat() 
// let str = "Javascript "
// console.log(str);
// console.log(str.repeat(15)); 

//! todo : trim()
// let str = "           I love You 💝           "
// console.log(str.trim());
// console.log(str.trimStart());
// console.log(str.trimEnd());

//! todo : split()

// let str = " I love Javascript "
// console.log(str);
// console.log(str.split());
// console.log(str.split(` `));
// console.log(str.split(``));

//! todo : split()

// let arr = ['I', 'love', 'Javascript']
// console.log(arr);
// console.log(arr.join());
// console.log(arr.join(` `));

//! todo : concat()

// let fname = "Dinga"
// let lname = "Raja"
// console.log(fname.concat(lname));

//! todo : replace()

// let str = "java java script"
// console.log(str);
// console.log(str.replace(`java` , 'mava'));
// console.log(str.replaceAll(`java` , 'mava'));

//! todo : padStart() & padEnd()

// let str = "5"
// console.log(str.padStart(3,"0"));
// console.log(str.padEnd(3,"0"));

//? import fronmcharcode()
// console.log(String.fromCharCode(65 ,90 ,97, 122));

for(let i = 65 ; i <= 90 ; i++){
    console.log(String.fromCharCode( i));
}
