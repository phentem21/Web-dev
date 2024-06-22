console.log("Namaste");

let lastName = 'Malviya';
lastName.charAt

let firstName = new String('kanha');

let message = `${lastName} This  is my first message`;
console.log(message);
let words = message.split(' ');

console.log(words);

let name = "Prakhar Malviya";
let message = 
`
    My Name 
    is ${name}
`;

console.log(message);

let date = new Date('june 20 1998 07:15')
let date3 = new Date(2004,4,21,7)

date3.setFullYear(1876);
console.log(date3);

let numbers = [2,4,6,8];
console.log(numbers);

searching on arrays

let arr = [1,3,5,7,9];
console.log(arr);

console.log(arr.indexOf(5)); //2
console.log(arr.indexOf(50)); //-1

console.log(arr.includes(5)); //true
console.log(arr.includes(50)); //false

console.log(arr.indexOf(5,3));// -1 


let courses = [
    {no:1,naam:'Prakhar'},
    {no:2,naam:'Anu'}
];

console.log(courses);

console.log(course.indexOf({no:1,naam:'Prakhar'}));

let course = courses.find(function(course) {
    return course.naam == 'Anu';
})

console.log(course);

Arrow function

let course = courses.find((course) => course.Name === 'Anu');
console.log(course);

let arr = [1,2,5,4,7];
console.log(arr);

// Remove at Beginning of Array
arr.shift();
console.log(arr);


// Remove at End of Array 
arr.pop();
console.log(arr);


// Remove at Middle 
arr.splice(1,1);
console.log(arr);

let numbers = [1,2,3,4,5,6,7];
let numbers2 = numbers;

//first way
// numbers = []; 

//second way
// numbers.length = 0;

//third way
numbers.splice(0,numbers.length);

console.log(numbers);
console.log(numbers2);


let first = [1,2,3,4];
let second = [5,6,7,8];

let combine = first.concat(second);
console.log(combine);

let sliced = combine.slice(2);
console.log(sliced);

Combines two array
let first = [1, 2, 3, 4];
let second = [4, 3, 2, 1];

let combine = [...first,'a', ...second];
console.log(combine);

let arr = [10,20,30,40,50];

for(let value of arr) {
    console.log(value);
}

arr.forEach(function(number) {
    console.log(number);
})
 
arr.forEach(element => console.log(element));

let n = [10,20,30,40,50];
const joined = n.join(',');

console.log(joined); 

let message = 'This is my first message';
let parts = message.split(' ');

console.log(parts);

let joined = parts.join('_');
console.log(joined);

let numbers= [10,56,87,65,23,66];

numbers.sort();
console.log(numbers);

numbers.reverse();
console.log(numbers);

let numbers = [1,3,2,4,7,6,8,9,0,-4,-9,-2,-4];

    let filtered = numbers.filter(value => value <=0);

console.log(filtered);

let numbers = [7,8,9,10,11];
console.log(numbers);

let items = numbers.map(value => 'student_no' + value);
console.log(items);

let numbers = [1,2,-6,-9];

let filtered = numbers.filter(value => value >=0);

let items = filtered.map(function(num) {
    let obj = {value : num};
    return obj;
})

console.log(items);