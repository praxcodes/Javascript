const fakeRequestCallback=(url,success,failure)=>{
    const delay=Math.floor(Math.random()*4500)+500;
    setTimeout(()=>{
        if(delay>4000){
            failure('Connection Timeout')
        }
        else{
            success(`here is your fake data from ${url}`)
        }
    },delay)
}
//success and failure are name of 2 callbacks 
//to each we pass a string as a parameter,in fucntion defn, we can define callbacks with
//any names but while calling that function, we can write a fucntion wothout any name or with a different name inplace of the callback
//makeRequest is a predefined function where 2 callbacks are passed
/*
makeRequest(()=>{
//if request is successful, first callback is executed
},
()=>{
    //if not, second callback is executed 

})
*/


fakeRequestCallback('books.com/page1',
function(response){
    console.log('it worked')
    console.log(response)
    fakeRequestCallback('books.com/page2',function(response){
        console.log("second page loaded after sucessfully loading first page")
        console.log(response)
    },function(err){
        //second callback went wrong
        console.log("2nd request failed",err)
    })
},function(err){
    console.log("error",err)
})

//causes a lot of nesting for series of requests
//series of requests



//PROMISES-is a returned object to which you attach callbacks instead of passing 
//callbacks into a function

//with promises, we can run code when promise is rejected or when it is resolved 

//promises' value eventually changes from pending to resolved or rejected  

//A promise expects us to pass a function which has 2 parameters- first one called resolve 
//and second one called reject which represent resolution and rejection of this promise 
//resolve and reject are fucntions basically we can execute at any point inside of this promise 
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                resolve('YOUR FAKE DATA HERE');
            }
            reject('Request Error!');
        }, 1000)
    })
}


//then and catch are methods to which you can attach callbacks
//promises are rejected and resolved with some values 
fakeRequest('/dogs/1')
    .then((data) => {
        console.log("DONE WITH REQUEST!")
        console.log('data is:', data)
        fakeRequest('/dogs/2')
            .then((data) => {
        console.log("DONE WITH REQUEST 2")
            })
            .catch(()=>{
        console.log('oh no error in 2nd request!')
            })
        
    })
    .catch((err) => {
        console.log("OH NO!", err)
    })

    

//can also do like this by saving the value into a variable
const res=fakeRequest('yelp.com')
res
.then((data) => {
    console.log("DONE WITH REQUEST!")
    console.log('data is:', data)
})
.catch((err) => {
    console.log("OH NO!", err)
})


//res is a promise(object) which can have 3 states 

// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();
//     }, delay)
// }

// delayedColorChange('red', 1000, () => {
//     delayedColorChange('orange', 1000, () => {
//         delayedColorChange('yellow', 1000, () => {
//             delayedColorChange('green', 1000, () => {
//                 delayedColorChange('blue', 1000, () => {
//                     delayedColorChange('indigo', 1000, () => {
//                         delayedColorChange('violet', 1000, () => {

//                         })
//                     })
//                 })
//             })
//         })
//     })
// });


const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}


delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('indigo', 1000))
    .then(() => delayedColorChange('violet', 1000))



//magic of promises 
fakeRequest('yelp.com/api/coffee/page1')
.then(()=>{  //for page 2 
    console.log('it worked (page 2)')
    //return a promise from within the callback
    return fakeRequest('yelp.com/api/coffee/page2')
})
.then(()=>{
    console.log('it worked (page 3)')
    return fakeRequest('yelp.com/api/coffee/page3')
})
.catch(()=>{
    console.log("oh no, a request failed")
    //common catch for all requests
})

//then method is attacjed to the callback which is resolve function
//catch method is attached to the callback which is reject

//creating our own promises 
new Promise((resolve,reject)=>{
    resolve();  //status of this promise is always resolved 
})

new Promise((resolve,reject)=>{
    reject();  //status of this promise is always rejected 
})

new Promise((resolve,reject)=>{
    //status of this promise is always pending 
})