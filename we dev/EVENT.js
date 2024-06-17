//method 2 

const btn= document.querySelector('#v2');
console.dir(btn)   //on the console
//shows properties of btn object ,all onClick etc properties are set to null
//we can change the value of these properties and set it to a function

//that function is executed whenever the element (button here) is clicked

btn.onClick = function () {               //inline function
    console.log("you clicked me");
    console.log("i hope it works");
}

btn.onClick  //on the console
//if we check we can see the value of property has changed 

//we can loop over all the buttons to assign these properties to them by this way

function scream (){
    console.log("aaaaa")
}


btn.mouseenter=scream;   //we are passing the function as the value of that property pertaining to a certain object
//the value of function should reference a function and not execute one right away

document.querySelector('h1').onClick = () =>{
    alert('you clicked me')
}

//method 3---------------IMPORTANT------
//use a mthod call addEventListener() which has 2 arguments: first- a string which is the vent we wanna listen for
//second argument : callback function that we want to execute 

const btn3=document.querySelector('#v3');
btn3.addEventListener('dblclick', function () {
    alert("clicked")   //mdn event reference
})

btn3.addEventListener('mouseup', scream)

function twist(){
    console.log('twist')
}

function shout(){
    console.log('shout')
}

const tasbtn= document.querySelector('#tas')
tasbtn.onClick =twist;
tasbtn.onClick =shout;
//shout funtion over writes twist 


//using event listener -advantage one - can add multiple actions on same event listeners

tasbtn.addEventListener('click',twist)
tasbtn.addEventListener('click',shout)

//advantage 2- can add options as arguments
//more control over how callbacks are triggered 

tasbtn.addEventListener('click',twist, {once:true}) //will only runs twist once and then it is gone 


//EVENT OBJECTS
//contain information about the event 

document.querySelector('button').addEventListener('click',function(evt){
    console.log(evt);
})

//information about keyboard events is stored in the keyboard event object

//we can listen for keyboard events on the entire window or a particular input

const input=document.querySelector('input');
input.addEventListener('keydown',function(e){
    console.log(e.key)
    console.log(e.code)
    //we  are using the event object to know what key was pressed, key and code are object properties
})
input.addEventListener('keyup',function(){
    console.log("keyup")
})


//if we wanna listen for keyup and keydown anywhere on the page
window.addEventListener('keydown',function(ev){
    switch (ev.code){
        case 'ArrowUp':
            console.log("up");
            break;
        case 'ArrowDown':
            console.log("down");
            break;
        case 'ArrowLeft':
            console.log("left");
            break;
        case 'ArrowRight':
            console.log("right");
            break;
        default:
            console.log("ignored");    

    }
})


//Forms-Event method called PreventDefault
const form=document.querySelector('#shelterForm')
const input1=document.querySelector('#catName');
const list=document.querySelector('#cats')
form.addEventListener("submit",function(en){
    en.preventDefault();
    console.log("submitted");
    //method that prevents the defualt baheviour given by an event
    const newli=document.createElement("li");
    const newcat=input1.value
    newli.innerText=newcat;
    list.append(newli);
    input1.value=""; //so that input is empty again
    //can also use form.reset
})

//event type- input ,triggered when input value changes , different from change event 
const h1=document.querySelector('h1')
input1.addEventListener('input',function(e){
    h1.innerText=input1.value //live preview of what you type in h1 using input event

})


//event bubbling
const container=document.querySelector('#container')
const button11=document.querySelector('#changecolor')

button11.addEventListener('click',function(e){
    container.style.backgroundColor=randColor();
    e.stopPropagation(); //will prevent this particular event from bubbling up
})//event bubbles up to the stop and we can stop that where each event has their own listener in diff element

container.addEventListener('click',function(){
    container.classList.toggle('hide')
})
//we cant change color of button now as the whole div container has hidden

//Event Delegation-we can add event listeners to the parent of the element that is listening for the event
list.addEventListener('click',function(e){  //selecting ul
    console.log(e);
    //when we click on an li in the ul we also click on the ul as li is nested in ul
    //so if we see properties of this event object its target property is set to the particular
    //li that was clicked in the ul which triggered the event on ul

    e.target.nodeName==='LI'&& e.target.remove(); //also removes new lis added by inputting text
   //BY ADDING && only li is removed and not any other element that is clicked and is nested in paragraph
})

//------ASYNCHRONOUS JAVASCRIPT
//Call stack- mechanism of js interpreter used to keep track of its place in a a script that calls multiple functions
//how js knows what function is currently being run

//when a new fucntion is called js adds it to the call stack and starts executing it, if that function calls other fucntions 
//it adds them to the stack to and removes them when it is done executing them

const multiply=(x,y)=>x*y;
const square=(x)=>multiply(x,x);
const isRight=(a,b,c)=>{
    return square(a)+square(b)===square(c);
}


//loupe helps visualise call stack

//Javascript is single threaded i.e at any given point of time, that single js thread
//is running at most one line of js code

//but the solution to this is callbacks
//browsers come with web APIs that are able to handle certain tasks in the background
//(like making requests or setTimeout)
//the js call stack recognises these web api fucntions and passes them off to
//the browser to handle, web api fucntions are basically methods that can be called using javascript
//once the browser finishes those tasks ,they return and are pushed onto the stack as a callback

//concept of callback- passing a function in that is not executed right away but later
//so java script gives control to browser when it encounters web api fucntions and continues with the rest of the script until brpwser finishes and pushes it onto the call stack

//web api fucntions are treated individually by browser and not in sequence
//so we can nest setTimeouts to change color after every 1000 milliseconds

setTimeout(()=>{
    document.body.style.backgroundColor='red';
    setTimeout(()=>{
        document.body.style.backgroundColor='green';
        setTimeout(()=>{
            document.body.style.backgroundColor='blue';
            setTimeout(()=>{
                document.body.style.backgroundColor='yellow';
            },1000)
        },1000)
    },1000)

},1000)

//we have to use callbacks to delay code execution but we end up passing 
//more than one callbacks to functions and it becomes nested a lot

const delayedchangeMyColor=(newcolor,delay,doNext)=>{
    setTimeout(()=>{
        document.body.style.backgroundColor=newcolor;
        doNext();
    },delay)
}

delayedchangeMyColor('red',1000,()=>{
    delayedchangeMyColor('orange',1000,()=>{
        delayedchangeMyColor('yellow',1000,()=>{
//only after the first thing is finished can the second thing happen
        })
    })
})




searchMoviesAPI('amadeus',()=>{
    savetomyDB('movies',()=>{
//if it works, run this
    },()=>{
//if it doesnt work run this
    })
},()=>{
//if api is down or request failed 
})

