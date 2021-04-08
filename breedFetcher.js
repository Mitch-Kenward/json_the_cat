const request = require('request');
const breedName = process.argv[2];
const url =  `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;



request(url, (error, resp, body) => {
  //console.log(data.length);
  if (error) {
    return console.log("Error");
  } else {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log("Breed not found");
    } else {
      console.log(data[0].description);
    }
  }
});