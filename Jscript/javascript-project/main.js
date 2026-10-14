// filter method 
/**let arr =['dog','cat', 'ladu', 'gate']
console.log(arr);
let clr = arr.filter((elem)=>{
  return elem.length > 3
})
console.log(clr);*/

//reduce() method

/**
array.reduce((accumulator, current value , index , array) =>{
return result
}).         */
/**let col =[2,4,3,5,7]
console.log(col);
let res =col.reduce((preval, curval)=>{
  let sum = preval+curval
    console.log(`${preval}+${curval}=${sum}`);
  return sum
})
console.log(res);*/
/**
let col =[2,4,3,5,7];
let multiple = col.reduce((preVail, curVal) => preVail * curVal, 1);
console.log(multiple); // 1680*/

// sort ()
/**let arr = [8,4,9,1,3,2,6,5,7]
console.log(arr);
console.log(arr.sort());
console.log(arr.sort().reverse());*/

/**let arr = [48,14,79,88,15,96,400,5,67]
console.log(arr);
let x = arr.sort((a,b)=>{
  return b-a 
})
console.log(x) */

// find() : it is used to find first matching elment of the condition 
/**let arr =[10,20,30,40,50]
console.log(arr);
let res = arr.find((elem)=>{
  return elem > 25
})
console.log(res); /30. */

// findIndex() : it is used to find first matching index
/**let arr =[10,20,30,40,50]
console.log(arr);
let res = arr.findIndex((elem)=>{
  return elem > 25
})
console.log(res);  /2 */

// some() : it is used to checks wheather at least one element satisfying   it return's in boolean 

/** let arr = [10,20,30,40,50]
let bool = arr.some((elem)=>{
  return elem % 2 == 0
})
console.log(bool); */

// every () : it is used checks weather all elements in the array satisfies the condition or not 

/** let arr = [70,20,30,40,50,60,22,21]
let bool = arr.every((elem)=>{
  return elem > 0
})
console.log(bool);  /true */

// with() :
/** let arr = [10,20,30]
console.log(arr);
console.log(arr.with(1, "him"));
console.log(arr); */

// fill() : 
/**
let arr =[10,20,30,40,50]
console.log(arr);
//console.log(arr.fill("sai"));
//console.log(arr.fill("sai", 3));
console.log(arr.fill("prem",1,4));
*/
// toSteing () :
/** let arr = ["I","Love","Java","Script"]
console.log(arr);
console.log(arr.toString()); 
*/

//(map ,filter ,sort , reduse ,indexof, slice ,aplice include)

