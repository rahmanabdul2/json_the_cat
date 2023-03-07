// breedFetcherTest.js

const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  // Define a test case to verify that the fetchBreedDescription function returns a string description for a valid breed
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // Assert that the error returned by the function is null, indicating that no error occurred
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // Assert that the description returned by the function matches the expected description, after trimming any leading or trailing whitespace
      assert.equal(expectedDesc, desc.trim());

      // Call the 'done' callback to indicate that the test case has completed
      done();
    });
  });


  it("returns error because an invalid breed is entered", (done) => {
    fetchBreedDescription('crazy', (err, desc) => {
      // Assert that the description returned by the function is null, indicating that an error occurred
      assert.equal(null, desc);

      // Define the expected description as null
      const expectedDesc = null;

      // Assert that the description returned by the function matches the expected description
      assert.equal(expectedDesc, desc);

      done();
    });
  });
});