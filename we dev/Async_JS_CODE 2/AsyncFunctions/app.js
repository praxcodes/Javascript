
//async keyword is used to declare a function as async
//an async function always returns a promise
//if promise returns a value, promise will be resolved with that value
//if function throws an exception, promise will be rejected  
async function hello() {
    return 'hey guy';
}
hello();
//promise resolved with the value passed in the resolve function
async function uhoh(){
    throw new Error('oh no!');
}
uhoh();//promise rejected with the value passed in the async function


const sing = async () => {
    throw "OH NO, PROBLEM!"
    return 'LA LA LA LA'
}

sing()
    .then((data) => {
        console.log("PROMISE RESOLVED WITH:", data)
    })
    .catch((err) => {
        console.log("OH NO, PROMISE REJECTED!")
        console.log(err)
    })




const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credentials'
    if (password === 'corgifeetarecute') return 'WELCOME!'
    throw 'Invalid Password'
}

login('todd', 'corgifeetarecute')
    .then(msg => {
        console.log("LOGGED IN!")
        console.log(msg)
    })
    .catch(err => {
        console.log("ERROR!")
        console.log(err)
    })


//AWAIT keyword- makes asynchronous functions synchronous
//we can only use await keyword inside of funtions declared with async
//await will pause the execution of the function , waiting for a promise to be resolved 



const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve(); //promise resolved without any value;
        }, delay)
    })
}

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('indigo', 1000))
//     .then(() => delayedColorChange('violet', 1000))


async function rainbow() {
    await delayedColorChange('red', 1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('indigo', 1000)
    await delayedColorChange('violet', 1000)
    return "ALL DONE!" //promise is resolved 
}

// rainbow().then(() => console.log("END OF RAINBOW!"))
//you can await either a promise or a fucntion that returns a promise 

async function printRainbow() {
    await rainbow();//if we wanna wait till rainbow is finished 
    console.log("END OF RAINBOW!")
}

printRainbow();

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 2000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

//need try and catch in case the promise awaited is rejected in async fucntions
async function makeTwoRequests() {
    try {
        let data1 = await fakeRequest('/page1');
        //the value with which the promise was resolved is stored in a variable
        console.log(data1);
        let data2 = await fakeRequest('/page2');
        console.log(data2);
    } catch (e) {
        console.log("CAUGHT AN ERROR!")
        console.log("error is:", e)
    }
    //error created in try is handled in catch

}

//---------what is AJAX---------
//we make requests to a server to sav data to a database through the server or load information in the form of webpages i.e
//HTML ,CSS and Javascript but sometimes we dont do anything and the Javascript code makes requests
//to the api/server to get data in the form of JSON which in turn manipulates the dom on the current webpage
//AJAX is making requests after the webpage has laoded 

//-----------------APIs----------

//when we dont want any html, css and javascript thats made for humans to see but just information we make requests to the apis

//web apis-programming interfaces for our applications that occur over HTTP and make requests to particualr urls- different apis with different parameters for different tasks found in the api documentation and then get a response 
//APIs are just any interface between one piece of software to another 
//companies expose endpoints which respond with information for other peices of software/code
//to consume 
//through apis you fetch and load data or make automatic bots to do task like send messages etc

//---------JSON: Javascript Object Notation---------
//format for sending data : XML and JSON
//JSON more commonly used now - a format of sending data from api to browser or just one software to another 
// json is strings  with curly braces and key value pairs 
// key value pairs need to double quoted strings 
//json.org
//we come across json apis while working with python etc 

//how to convert json string to javascript object to access it in the code 
const data=`{json string}`
const parsedData=JSON.parse(data)

//vice-cersa
JSON.stringify(parsedData)
//when we want to send data to an api and the api wants us to send data as json

//-----POSTMAN----------------------------
//tool used to make different HTTP requests to test out different APIs REQUESTS or your own APIs and save them
//we are always making requests when we are on a webpage
//endpoints that apis provide are urls that help you access the required information in the form of json
//base urls are the urls of the api (page)generally , then you add different endpoints to get different results 

//example of an http request to an API

// GET https://catfact.ninja/breeds

//----------------------HTTP Verbs--------- 
//different kind of requests that we can send in HTTP like GET, POST etc
//useful in building our own servers or API

//API only supports specific type of requests to URLs

//GET request to get info from APIs

//HTTP Status Codes----------------------------
// -200 successful responses (ones that start with 2)
//500 - server side errors
//300- redirection 


//HTTP query strings---------------------
//used to make a request - can add in urls with endpoints 
//?key value pair & key value pair 
//eg: ?sort=desc&color=blue/
//api requests are not affected by the query string , often servers are coded in a way to look for a particular key whose value is provided by the user 
//often certain api want you to provide query strings(values to keys)

//HTTP headers are meta data addon details in your request or response in form of key value pairs again
//some apis want us to set some values in http headers to get certain kind of response like json or html etc