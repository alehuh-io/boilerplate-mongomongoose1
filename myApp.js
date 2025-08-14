require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

// Listen on Render's port (set automatically) or default 3000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is listening on port ${port}`));

// ----- Your existing FCC Mongoose code -----
let Person;

const createAndSavePerson = (done) => { done(null); };
const createManyPeople = (arrayOfPeople, done) => { done(null); };
const findPeopleByName = (personName, done) => { done(null); };
const findOneByFood = (food, done) => { done(null); };
const findPersonById = (personId, done) => { done(null); };
const findEditThenSave = (personId, done) => { done(null); };
const findAndUpdate = (personName, done) => { done(null); };
const removeById = (personId, done) => { done(null); };
const removeManyPeople = (done) => { done(null); };
const queryChain = (done) => { done(null); };

// Export functions as before
exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
