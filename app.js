//https://github.com/axios/axios#installing

//Make request and parse the json in a step
axios
  .get("https://swapi.dev/api/people/1/")
  .then((res) => {
    console.log("RESPONSE: ", res);
  })
  .catch((e) => {
    console.log("ERROR! ", e);
  });

const getStarWarsPerson = async (id) => {
  try {
    //Make request and parse the json in a step
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    console.log(res.data);
  } catch (e) {
    console.log("ERROR", e);
  }
};

getStarWarsPerson(5);
getStarWarsPerson(10);
