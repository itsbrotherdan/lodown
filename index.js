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
/**
 * first: Function takes in an array and a number and returns: an array if array is not an array, if number is not given or not a number return the first element
 * return first value in array,
 * @param {An Array}: Function takes in an array.
 * @param {A number}: Function takes in a number.
 * 
 * @return {An array} Function returns an empty array, first element in array, first value in array
 */
 function first(array, num){
    var a = []; //store our values in empty array
    //if array is not an array 
    if (!Array.isArray(array)){
        //return an empty array
        return a;
        //else if num is not given, or a number 
    } else if (typeof num != 'number'){
        //return first value in the array
        return array[0];
        //if num is greater than the array length
    } else if (num > array.length){
        //return array
        return array;
    } else {
     for (var i = 0; i < num; i ++){
        a.push(array[i]);
     }
    }
    return a;
}
module.exports.first = first;
/**
 * first: Function takes in an array and a number and returns: an array if array is not an array, if number is not given or not a number return the first element
 * return first value in array,
 * @param {An Array}: Function takes in an array.
 * @param {A number}: Function takes in a number.
 * 
 * @return {An array} Function returns an empty array, last element in array, last value in array
 */
function last(array, num){
    //store our values in empty array
    var b = [];
    //if array is not an array
    if (!Array.isArray(array)){
        //return an empty array
        return b;
        //else if num is not given, or a nunber
    } else if (typeof num != 'number'){
        //return last element in array
        return array[2];
        //else if num is greater than array.length
    } else if (num > array.length){
    //return array
    return array;
    //checking if num is negative
    } else if (num < 0){
        return b;
    } else { //iterating overarray pushing values into our new array
    for (var i = num - 1; i < array.length; i ++){
        b.push(array[i]);
    }
    }
    return b;
    }
    module.exports.last = last;
    /**
     * indexof :Function is made to find index of array otherwise return -1 if not found
     * @param {An Array}: Function takes in an array.
     * @param {A Value}: Function takes in a value.
     * 
     * @return {Index or -1}: Functions returns the index of the first occurence of value if not found in array returns -1
     */
 function indexof(array, value){
        //iterate through array 
    for (let i = 0; i < array.length; i++){
        //check if value in array is === to value 
        if (array[i] === value){
            //return the index
            return i;
        } 
    }
    //if value is not in array return -1
    return -1;
    }
    module.exports.indexof = indexof;
/**
 * filter: Function is made to filter out values based on condtions
 * @param {An Array}: Function takes in an array
 * @param {Callback Func}: Function takes in a callback function
 * 
 * @return {Array}: Function returns new array with filtered values if true
 */
 function filter(array, func){
    //create an empty array
    let output = [];
    //iterate over array
    for (let i = 0; i < array.length; i ++){
        //create callback func
        if(func(array[i], i, array)){
            //push filtered values into new array if true
            output.push(array[i]);
        }
    }
    //return new array
    return output;
}
module.exports.filter = filter;
/**
 * reject: Function is made to filter out values based on condtions
 * @param {An Array}: Function takes in an array
 * @param {Callback Func}: Function takes in a callback function
 * 
 * @return {Array}: Function returns new array with filtered values if false
 */
 function reject(array, func){
    //create empty array 
    let output = [];
    //iterate over the array
    for (let i = 0; i < array.length; i++){
        //create callback func
        if(!func(array[i], i, array)){
            //push filtered values into new array if false
            output.push(array[i]);
        }
    }
    //retrun new array
    return output;
}
module.exports.reject = reject;
/**
 * contains: Function checks if array contains value and returns true otherwise return false
 * @param {An Array}: Function takes in an array
 * @param {A Value}: Function takes in any value
 * 
 * @return {True or False}: Function return true if value is found in array and false otherwise
 */
function contains(array, value){
    for (var i = 0; i < array.length; i ++){
       if (array[i] === value){
           return true;
       }
    }
    return false;
   }
module.exports.contains = contains;
/**
 * map: Function checks if collection is an array or orbject and saves new values of each function call in an array 
 * @param {Collection}: Function takes in a collection (array or object)
 * @param {Func}: Function takes in a func param to create a callback func
 * 
 * @return {Array}: Function returns the new values in a new array
 */
function map(collection, func){
    //create empty array for holding
    var arr = [];
    //if collection is an array - loop then - push call back func
    if (Array.isArray(collection)){
        //loop over possible array
        for (let i = 0; i < collection.length; i ++){
            arr.push(func(collection[i], i, collection));
        } 
    } else { //else if collection is an array - loop then - push call back func
        //loop over possible object
        for (let key in collection){
            arr.push(func(collection[key], key, collection));
        }
    }
    //return new array
    return arr;
}
module.exports.map = map;
/**
 * unique: Function removes duplicates from an array and returns new array
 * @param {Array}: Function takes in an array;
 * 
 * @return {Array}: Function return a new array with duplicates removed
 */
 function unique(array){
    //creating empty array
var newArr = [];
//looping over array
for (var i = 0; i < array.length; i++){
    if (_.indexOf(newArr, array[i]) === -1){
        //pushing new values into empty array
        newArr.push(array[i]);
    }
} 
//return new array
return newArr;
}
module.exports.unique = unique;
/**
 * reduce: Function reduces on each element of the array
 * @param {Array}: Function takes in an array
 * @param {Func}: Function takes in a callback function
 * @param {Seed}: Function takes in a seed value
 * 
 * @return {Array}: Function returns a new array of the result 
 */
function reduce(array, func, seed){
    //create result variable
    let result;
    //determine if seed value was not given a value
    if (seed === undefined){
      //assign result to first value of array  
      result = array[0];
      // iterate through input array
      for (let i = 1; i < array.length; i++){
        result = func(result, array[i], i, array)
      }
    
    } else {
        //assign result the value of seed
        result = seed;
        //iterate normally
        for (let i = 0; i < array.length; i++) {
            result = func(result, array[i], i, array)
        }
    }
    return result;
}
module.exports.reduce = reduce;
/**
 * every: Function goes through every value and returns true or false depending on condition
 * @param {Collection}: Function takes in a collection
 * @param {Func}: Function takes in a call back function
 * 
 * @return {Boolean}: Function returns boolean if values in collection match the conditon
 */
 function every(collection, func){
    if(func === undefined ){
        //determine if collection is an array
        if(Array.isArray(collection)){
            //iterate through collections array
            for(let i = 0; i < collection.length; i++){
                //determine if collection[i] is truthy
                if(!collection[i]){
                    //return false;
                    return false;
                }
            }
        } else { //else
            //iterate through object
            for(let key in collection){
                //determine if collection[key] is truthy
                if(!collection[key]){
                    //return false;
                    return false;
                }
            }
        }
    } else{ //else
        //determine if collection is an array
        if(Array.isArray(collection)){
            //iterate through collections array
            for(let i = 0; i < collection.length; i++){
                //determine if invoking func on the params is false
                if(func(collection[i], i, collection) === false){
                    //return false
                    return false;
                }
            }
        } else{ //else its an object
            //iterate through object
            for(let key in collection){
                //determine if invoking func on the params is false
                if(func(collection[key], key, collection) === false)
                {   //return false;
                    return false;
                }
            }
        }
    }//return true
    return true;
     }
     module.exports.every = every;