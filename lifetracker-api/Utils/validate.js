const { UnprocessableEntityError } = require('./error'); // imports the UnprocessableEntityError class from the error.js file in the utils folder
 
const isNil = (value) => value === null || value === undefined; // checks if the value is null or undefined

const validateFields = ({ required, obj, location }) => {  // validates the fields
    if (!obj) throw new UnprocessableEntityError(`Missing object for validation.`)  // if there is no object, it will throw an error
  
    required.forEach((item) => { // loops through the required items
      if (isNil(obj[item])) {  // if the item is null or undefined, it will throw an error
        throw new UnprocessableEntityError(`Required field - ${item} missing${location ? ` at ${location}` : ""}`)  // throws an error
      }
    })
  }
  
  module.exports = { validateFields, isNil }  // exports the validateFields and isNil functions


