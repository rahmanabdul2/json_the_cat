// we'll create our API client
const request = require('request');


const fetchBreedDescription = (breed, callback) => {
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

  // Send an HTTP GET request to the specified URL
  request(URL, (error, response, body) => {
    // Handle errors from the request function
    if (error) {
      callback(error, null);
      return;
    }

    // Convert the response body from JSON string to JavaScript object
    const data = JSON.parse(body);

    // Handle case when the breed name provided does not exist
    if (data.length === 0) {
      callback(`Breed '${breed}' not found.`, null);
      return;
    }

    // Call the callback function with the description of the breed as the second argument
    callback(null, data[0].description);
  });
};


module.exports = fetchBreedDescription;