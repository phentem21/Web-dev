// console.log('hello');

function run(){
    console.log('running');
}

// function call or invoke
run();

//Named function assignment 
let stand = function walk() {
    console.log('walking');
};

stand();

//Anonymous function assignment

let stand2 = function() {
    console.log('walking');
};

stand();

function sum(a,b) {
    console.log(arguments);
    return a+b;
}

let ans = sum(1,2,3,4,5,6); 

function sum(a,b) {
    let total = 0;
    for(let value of arguments)
        total = total + value;
    return total;
}

let ans = sum(1,2,3,4,5,6);
console.log(ans);

Rest operator 

function sum(num,value,...args) {
    console.log(args);
}

sum(1,2,3,4,5,6);

Default Parameters
function interest(p,r=6,y=10) {
    return p*r*y/100;
}

console.log(interest(1000,undefined,8));


GETTER SETTER

getter -> access properties
setter -> change or mutate properties

let person = {
    fName:'KANHA',
    lName:'MALVIYA',
    get fullName() {
        return `${person.fName}   ${person.lName}`; 
    },
    set fullName(value) {
        if(typeof value !== String) {
            throw new Error('you have not sent a string');
        }
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }
};

console.log(person);

function fullName() {
    return `${person.fName} ${person.lName}`; 
}

console.log(person.fullName); 
try {
    person.fullName = true;
}
catch (e){
    alert(e)
}

console.log(person.fullName);

{
    var a = 5;
    console.log(a);
}

function walk() {
    var a = 5;
}

console.log(a);

if(true){
    var a = 5;
}

console.log(a) ;

function a() {
    const ab = 5;
}
const ab = 5;
function b() {
    const ab = 5;
}

let arr = [-1,-2,-3,-4,-5,-6];
let sum = arr.reduce((totalSum,val) => totalSum + val,0);
console.log(sum);