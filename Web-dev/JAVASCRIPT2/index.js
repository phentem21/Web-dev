// console.log('let start');

// object create

// let rectangle = {
//     length : 1,
//     breadth : 2,

//     draw: function(){
//         console.log('drawing rectangle');
//     }
// };

//factory function

// function createRectangle(len,bre){

//     return rectangle = {
//         length : len,
//         breadth : bre,
    
//         draw(){
//             console.log('drawing rectangle');
//         }
//     };
// }

// let rectangleobj1 = createRectangle(5,4);

// camelcase ->numberofstudents

// constructor functions -> Pascal notation -> first letter of every word is Capital ->numberofstudents
// constructor function -> prop/methods -> initialise/Define

function Rectangle(len,bre) {
    this.length = len;
    this.breadth = bre;
    this.draw = function(){
        console.log('drawing');
    }
}

//object creation using constructor function
let rectangleObject = new Rectangle(6,9);

// rectangleObject.color = "yellow";
// console.log(rectangleObject);

// delete rectangleObject.color;
// console.log(rectangleObject); 

// let Rectangle1 = new Function(
//     'length','breadth',
// 'this.length = length;
// this.breadth = breadth;
// this.draw = function() {
//     console.log('drawing');
// }');  

// object creation using rectangle1
// let rect = new Rectangle1(2,3);

// console.log('rect';)