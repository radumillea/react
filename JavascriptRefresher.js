//SPREAD   & REST  Operators

// Spread operator  -  split up the array elements or objects properties

// ex :
//  const newArray = [...oldArray,1,2]
//  const newObject = {...oldObject , newProp: 5 }

//  rest operator :  - used to merge a list of a function arguments into a array

//  ex :
//  function sortArgs(...args) {
//     return args.sort();
//  }

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

console.log("New numbers array : " + newNumbers);

const filter = (...args) => {
  return args.filter((el) => el === 1); //returns array;
};

console.log(filter(1, 2, 3, 1));


// DESTRUCTURING

// Easly extract array elements or oject prperties and store them in variables

//ex : 


[a,b] = ['Hello', 'Max']
console.log(a);
console.log(b) ; 

const {nume} = {nume:'nume'}
const {age} = {age : 31}
console.log(nume)
console.log(age)


