//SELECTING ELEMENTS USING METHODS

//ref: index.html file in DOM_Intro_Code folder in we dev directory
// need to link html with js by adding script tag in html doc
//<script src="app.js"></script>

const banner=document.getElementById('banner')
console.dir(banner)//returns an object that represents that element

const images=document.getElementsByTagName('img')
//returns an HTML collection not an array that we store in images

console.dir(images[0])//returns an object that represents an image witha  certain id or class 
//that depends on the HTML code of the img tag used to represent that image

images.length// on console
//returns no. of items in collection

for(let img of images){
    console.log(img.src)
}// shows that images is iterable and it lists out src property which is one of the attributes for each img in images 
//each HTML collection contains objects with certain properties.
//These type of these objects is elements and each element represents an Html element

//getElementsByClassName- pass in class name as string
//if a tag has a class attribute we can select that tag using this method
const sqaureImages=document.getElementsByClassName('square')
//returns an HTML collection with image elements as objects

for(img of squareImages ){
    img.src='lin of first image'
}
//changes the all images which have the class sqaure to the first image 

document.getElementsByClassName('squaredsd')
//if given class name is not found, we get an empty collection

document.getElementById('gtdsd')
//if id is not found we get null, because an id is only supposed to occure once per page

//QUERY SELECTOR- pass in a string
//single method to select by any CSS style selector
document.querySelector('p')
//by tag name
//gives us the first match
document.querySelector('#banner')
//by id
document.querySelector('.sqaure')
//by class name
document.querySelector('a[title="Java"]')
//by attribute name

document.querySelectorAll('p')
//returns all elements as objects with p as tagname
//returns elements objects itself and not a collection

const links=document.querySelectorAll('p a')
//returns anchor tags under p tags 
//syntax for css seclector- element descendent element

for(link of links){
   console.log(link.href)
}
//returns links fo ftp protocol

//every objects have lots of properties- can use to manipulate html and css
//some are:
document.querySelector('p').InnerText='lolololol'
document.querySelector('p').textContent// retrieving the property value of selected object
//displays everything in markup even hidden ones 
//like setting style=display:none text enclosed in this tag wont be shown in innerText
document.querySelector('a')
for(link of links){
    link.innerText='i am a link'
}

//innerHTML-GIVES US THE ENTIRE MARKUP CONTAINED WITHIN SOME ELEMENT
document.querySelector('h1').innerHTML=<i>sncbsh</i>
//dom changes text enclosed in h1 tag and to italics
//innerHTML treats it as html whereas innertext doesnot
//innerHTML returns all tags and text enclodes in them, used for manipulating

document.querySelector('h1').innerHTML+=<sup>sncbsh</sup>
document.querySelector('p').innerHTML=<b>ekfnb</b>//we overwrite the whole markup in b tag 

//attributes given to a tag are also included in an element/object's properties
document.querySelector('#banner').id='whoops'


//everything got deleted :( after inner html from dom
// attributes 
//changing styles 
//class list 
//parent child sibling
//append and appendChild
//removeChild and remove 


//keywords related to an element which is an object in javascript: object has properties which also includes attributes given to elements plus more properties and then there are methods 

//------EVENTS---------
//listening and responding to users actions like click , drag, reorder, hovering, keyboard events etc
//data is loaded in chunks and new images are loaded as you scroll and appended to the page
//changing or adding elements or changing styles in response to events 


//EVENT HANDLERS
//method 1
//INLINE EVENTS 
//adding Javascript to the HTML by adding an attribute to the concerned element/tag

//functionality added to an element doesnt get carried forward so we have to copy the whole javascript to add it to a new button element
//(refer: event.html)

//on a website we often need to add multiple buttons or elements with repeated funcitonality

//like onClick attribute we have many on... attributes

