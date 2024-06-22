// Primitive Make Copy 
// let a = 10;
// let b = a;

// a++;
// console.log(a); //11
// console.log(b); //10


// let a = {value:10};
// let b = a;

// a.value++;

// console.log(a.value); 
// console.log(b.value);

// Notes : primitve are copied by their values.
// References are copied by their address/reference. 


// let a =10;

// function inc(a){
//     a++;
// }

// inc(a);

// console.log(a);

// let a ={value :  10};

// function inc(a){
//     a.value++;
// }

// inc(a);

// console.log(a.value);

let rectangle = {
    length:2,
    breadth:4,
}

// for in loop
// for( let key in rectangle) {
//     // keys are reflected through key variable
//     // values are reflected through rectangle[key]
//     console.log(key,rectangle[key]);
// }

//for off loop
// for(let key of Object.entries(rectangle)){
//     console.log(key);
// }

// if('color' in rectangle) {
//     console.log('present');
// }
// else { 
//     console.log('absent');
// }

//object-clone1
// let src = {
//     a:10,
//     b:20,
//     c:30,
// }

// let dest = {};

// for (let key in src) {
//     dest[key] = src[key];
// }

// console.log(dest);

// src.a++;
// console.log(dest);

//object cloning #2
// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let src2 = {value: 25};

// let dest = Object.assign({},src,src2);

// console.log(dest);

// src.a++;

// console.log(dest);

//object cloning #3

let src = {
    a:10,
    b:20,
    c:30
};

let dest = {...src};

console.log(dest);

src.a++;
console.log(dest);