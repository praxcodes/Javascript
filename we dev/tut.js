//All the Javascript u need for React



//you export a function to use it in another files and the 
//way you export functions and arrow functions is different 

export default function DoSomething(){
    //logic or what the function is going to do
}

export const DoSomething =() => {       //defining a function using arrow functions


}
//useful for call back functions 

//in REACT, you define components which are just functions like below
//which takes in props which are arguments and return html

const MyComponent = () => {
    return <div></div>

}

//REACT - Anonymous functions
<button 
    onClick={() =>{            //can define inline functions
    console.log("hello world");
}}
></button>

//Ternary operators
