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