//syntactically better- supports promises therefore avoids nesting of callbacks 
//we use callbacks/promises async and await when making requests to api



//fetch method- makes get request by default and returns a promise 
fetch("https://swapi.dev/api/people/1/") //we get a prmoise in return 
  .then((res) => {   //we get the resolved object res
    console.log("RESOLVED!", res);
    //prmoise is resolved as soon as the fetch recieves any headers so it may not have the full body of info we want- all the json
    return res.json(); //json method returns a promise 
  })
  .then((data) => {  //data=res.json()
    console.log(data);// we add this method just to print out the data we got back if promise is resolved , remember promise is also an object
  })
  .catch((e) => {
    console.log("ERROR!", e);
  });


  //to make series of requests

// fetch("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log("RESOLVED!", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     return fetch("https://swapi.dev/api/people/2/");
//   })
//   .then((res) => {
//     console.log("SECOND REQUEST RESOLVED!!!");
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log("ERROR!", e);
//   });


//another way of doing 
//remember this

const loadStarWarsPeople = async () => {
  try {
    const res = await fetch("https://swapi.dev/api/people/1/");
    const data = await res.json();
    console.log(data);
    const res2 = await fetch("https://swapi.dev/api/people/2/");
    const data2 = await res2.json();
    console.log(data2);
  } catch (e) {
    console.log("ERROR!!!", e);
  }
};

loadStarWarsPeople();
