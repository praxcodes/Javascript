//alert('Hello World');
//console.log('Hello World');
//console.error('This is an error');
//console.warn('This is a warning');

//var,let,const 
//var is globally scoped, therefore we don't use var
//let and const have a block level scope
//let age=30;
//age = 31;//let allows you to update the variables
//console.log(age);
/*const age=31;
age= 32;
console.log(age);*/
//this shows an error as value cannot be reassigned in a const variable
//we can always use const unless we know that we are gonna reassign the value, in that case use let.

//DATA TYPES: 
const name = 'John';//string
const value = 30;// number
const rating = 4.5;
const isCool = true;//boolean
// const x = null; //null
const y = undefined;
let z;//undefined only declared 
console.log(typeof name);// gives datatype of variable and null type comes as object which is wrong

//Concatenation of strings
console.log('My name is' + name +' and I am '+ value);
//Template strings
console.log(`My name is ${name} and I am ${value}`);
//or
const hello=(`My name is ${name} and I am ${value}`);
console.log(hello);

//String properties and methods
const s = 'Hello World!';
console.log(s.length); //property
console.log(s.toUpperCase()); //method-function associated with an object
console.log(s.substring(0,5).toUpperCase());
const f= 'technology, computers, it, code';
console.log(s.split(', ')); //split string into an array, used for adding tags etc
// we have each word in each array value here

//ARRAYS- variables that hold multiple values 

const numbers = new Array(1,2,3,4,5); //constructor new keyword
console.log(numbers);

const fruits = ['apples','oranges','pears',10, true]; // use this method for defining arrays
console.log(fruits);
//js lets you have multiple datatype variables in an array

//how to access an element from the array
console.log(fruits[1]);
//to add element in array
fruits[3] = 'grapes';
//we can manipulate the array despite using const we just can't reassign it


//alt
fruits.push('mangoes'); // adds to end

fruits.unshift('strawberries'); //adds to front
fruits.pop(); //takes out last element of array
console.log(Array.isArray(fruits)); //to check if something is array, gives out true 
console.log(fruits.indexOf('oranges'));

//OBJECT LITERALS-key value pairs 
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music','movies','sports'],
    address: {
        street: '50 main street',
        city: 'Boston',
        state: 'Ma'
    }
}
console.log(person);
//acessing a value or multiple values
console.log(person.firstName,person.lastName); //prints John Doe
console.log(person.hobbies[1]);
console.log(person.address.city);

//destructuring -we want object properties as actual variables 

const{ firstName, lastName , address: {city}} = person; //pulling out from person object
console.log(firstName);
//add property
person.email = 'john@gmail.com';
console.log(person);

//ARRAYS OF OBJECTS- each value in array is an object
const todos = 
[
    {
        id: 1,
        text: 'Take out trash',  //object
        isCompleted: true
    },

    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    },

];
console.log(todos[1].text); //meeting with boss

//json=data format, used to send data to api and recieve from it 
const todosJSON = JSON.stringify(todos);
console.log(todos);  //we recieve a json string in return,syntax very similar to object literals


//For loops
for(let i= 0;i<10;i++){
    console.log('For loop number: ${i}');
}

//while loop -setting variable outside the loop
let i = 0;
while(i<10){
    console.log('while loop number: ${i}');
    i++;
}
  
//how to loop through arrays
for(let i= 0;i<todos.length;i++){
    console.log(todos[i].text);
}

//for of method-preferred to loop through arrays
for(let todo of todos){
    console.log(todo.id); //todos is name of array and todo(variable name) is an object of the array
}

//HIGHER ORDER ARRAY METHODS-for any kind of iterations with arrays

//take in a function as a parameter 

//forEach- iterates through each oblect/element in array
//map-creates a new array from an array
//filter-creates a new array with some conditions

todos.forEach(function(todo){
 console.log(todo.text);  //parameter of function is the each item or each object
});

const todoText = todos.map(function(todo){
    return todo.text;
}); //returns an array which has only the text called todoText

console.log(todoText);



const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted=== true;
}).map(function(todo){
    return todo.text;
})           //returns text of tasks that are completed
console.log(todoCompleted);

//Conditionals
const h = '10';

if(h==10){
    console.log('h is 10');
}
/*if(h===10){
    console.log('x is 10');  //matches the data type also 
}*/
else if(h>10){
    console.log('h is greater than 10')
}
else{
    console.log('h is less than 10');
}

const a = 4 ;
const b = 10;
if(a > 5 || b > 11 ){
    console.log('a is more than 5 or b is more than 10');
}  //true even if one is correct

if(a > 5 && b > 11 ){
    console.log('a is more than 5 or b is more than 10');
}    //wont print as both are not correct

//&& is better than nesting if statements while working with 2 variables

//ternary operator- used to assign value to variables based on condition

const x = 10;
const color = x>10 ? 'red' : 'blue';
// ? is used as then and : is used as else 
console.log(blue);

//Switch Case
const color1 = 'green';
switch(color1){
    case 'red' :
        console.log('color is red');
        break;
    case 'blue' :
        console.log('color is blue');
        break;
        default:
            console.log('color is NOT red or blue');
            break;

}

//FUNCTIONS
/*function addNums(num1=1 , num2=1){
    console.log(num1 + num2);
}
addNums(5,5);

//or
function addNums(num1=1 , num2=1){
    return num1+num2;
}
console.log(addNums(5,5));

//or
const addNums = (num1=1 , num2=1)=> console.log(num1+num2);
//if we have only one line in function

addNums(5,5);

//or
const addNums = (num1=1 , num2=1)=>num1+num2;
console.log(addNums(5,5));

//or
const addNums = num1=>num1+5;
*/

//OBJECT ORIENTED PROGRAMMING
//we can construct objects using constructor functions

//Constructor function to make Person object
/*
function Person(firstName,lastName,dob){
this.firstName = firstName;
this.lastName = lastName;   //properties of objects
this.dob = new Date(dob);  //date constructor - to convert string into date object



//function prototyping so thatobject methods dont come in every instance of an object
Person.prototype.getBirthYear = function() {       //method-functions to Person object
    return this.dob.getFullYear();//built-in method
}
Person.prototype.getFullName = function() {
    return `$(this.firstName) $(this.lastName)`;
}
}
*/

//class
class Person{
    constructor(firstName,lastName,dob){
        this.firstName = firstName;
        this.lastName = lastName;   //properties of objects
        this.dob = new Date(dob);    
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `$(this.firstName) $(this.lastName)`;
    } //adding these methods to class just added them to the prototype
     
}

//instantiate object -assign variable to object-Person is custom made constructor
const person1 = new Person('John','Doe','4-3-1998');
const person2 = new Person('mary','Smith','4-2-1998');
console.log(person1.firstName);  //prints an object literal Person ka firstname
console.log(person1.dob); //as an output we get date object insstead of date

console.log(person1.getBirthYear);
console.log(person1.getFullName);  //calling method

//DOCUMENT OBJECT MODEL


