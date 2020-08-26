// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function (breed, functionToRunWhenThingsAreDone) {
  console.log('breedDeails: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log('In readFile\'s Callback: It has the data.')
    if (!error) functionToRunWhenThingsAreDone(data)
  });
};

const printOutCatBreed = breed => {
  console.log(`Return Value: `, breed);
};

module.exports = breedDetailsFromFile;