'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;
/**
 * identity: Function takes in any input value and return value unchaged.
 * 
 * @param {Any Value}: Function takes in any input value.
 * @return {Any Value}: Function returns input value unchanged.
 */
 function identity(value){
    //returning value unchanged
        return value;
    }
module.exports.identity = identity; 
/**
 * typeOf: Function takes in any value returns value as a string
 * 
 * @param {Any Value}: Function takes in any value.
 * @return {A String} Function returns a string of each typeOf value
 */
 function typeOf(value){ 
    if (Array.isArray(value)){
        return 'array'; //checking if array
    }  else if(typeof value === 'string') {
        return 'string'; //checking if string
    } else if (value === null){
      return 'null'; //checking if null
    } else if (typeof value === 'number'){
      return 'number'; //checking if number
    } else if (value instanceof Date ){
      return 'date'; //checking if date
    } else if (typeof value === 'function'){
      return 'function'; //checking if function
    } else if (typeof value === 'boolean'){
        return 'boolean'; //checking if boolean
    } else if (typeof value === 'undefined'){
        return 'undefined'; //checking if undefined
    } else if (typeof value === 'object'){
        return 'object'; //checking if object
    } 
};
module.exports.typeOf = typeOf;