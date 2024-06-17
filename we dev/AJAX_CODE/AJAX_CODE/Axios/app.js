// axios- a library for making http requests 
//one library for making requests from browser side 
//same library for making requests from server side 

//include script tag conatining cdn to axios library in html document 
//find it in axios github repo

//   .get("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log("RESPONSE: ", res);
//   })
//   .catch((e) => {
//     console.log("ERROR! ", e);
//   });

const getStarWarsPerson = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`); //returns a promise, response object with all the data after parsing json 
    console.log(res.data);
  } catch (e) {
    console.log("ERROR", e);
  }
};

getStarWarsPerson(5);
getStarWarsPerson(10);
