// This file will be the one that users can run and provide the breed name to. It will then require the breedFetcher file and call its exported function.
const fetchBreedDescription = require('./breedFetcher');
const breedName = process.argv[2];

// Call the 'fetchBreedDescription' function with the breed name and a callback function to handle the result
fetchBreedDescription(breedName, (error, description) => {
  // Handle errors from the 'fetchBreedDescription' function
  if (error) {
    console.log(`Error fetching details: ${error}`);
  } else {
    // If the request is successful, log the breed name and its description to the console
    console.log(`${breedName}: ${description}`);
  }
});