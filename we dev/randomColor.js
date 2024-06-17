const btn=document.querySelector('button');


 
/*
btn.addEventListener('click',function() {
    const r=Math.floor(Math.random() * 256)
const g=Math.floor(Math.random() * 256)
const b=Math.floor(Math.random() * 256)
const rgb= `rgb(${r},${g},${b})` 
 // we are storing a string in rgb variable, browser's js interpretor replaces values of rgb in it
     document.body.style.backgroundColor=rgb;
     h1.innerText=rgb
})
*/

//alternatively we can also make a function of randomCOLOR

function randColor(){
    const r=Math.floor(Math.random() * 256)
    const g=Math.floor(Math.random() * 256)
    const b=Math.floor(Math.random() * 256)
   return `rgb(${r},${g},${b})` 

}
btn.addEventListener('click',function() {
    const newColor=randColor();
    document.body.style.backgroundColor=newColor;
     h1.innerText=newColor;

    
})


const buttons = document.querySelectorAll('button')
//buttons is an HTML collection

for(button of buttons){
    button.addEventListener('click',colorize)
}

const h1s=document.querySelectorAll('h1')

for(h1 of h1s){
    h1.addEventListener('click',colorize)
}

function colorize(){
    this.style.backgroundColor=randColor();
    this.style.color=randColor(); //changing color of text

    //this keyword refers to the element to which event is occuring 
    //used so that we dont have to write function to every element

}