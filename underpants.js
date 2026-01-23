// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value){
    return value;
};

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function(value){
// function takes in a value and returns its type as a string
var return_value = Object.prototype.toString.call(value);
   
var type = return_value.substring(
         return_value.indexOf(" ") + 1, 
         return_value.indexOf("]"));

return type.toLowerCase();

};

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, number){
    if (!number) {
        return array[0];
    } else if (number < 0 || !Array.isArray(array)) {
        return [];
    } else if (number > array.length) {
        return array;
    } else if (number) {
       let newArray = array.slice(0, number);
        return newArray;
        }
    
}

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
// I: function takes an array and a number
// O: if Array.isArray(array) === false, return [];
// if (!number) or NaN, return only the last element in the array
// otherwise, return the last <number> items of <array>
// E: account for number being negative or greater than array.length

_.last = function(array, number) {
    var output = [];
    if (!Array.isArray(array) || number < 0) {
        return output;
      } else if (number == null) { 
          output = array[array.length - 1];
          return output;
      } else if (number > array.length) {
          output.push(array);
        return array;
      } else if (Array.isArray(array) && number === number) {
          output = array.slice(array.length - number, array.length);
          return output;
      }
    }

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
// I: function takes an array and a value as inputs
// O: function returns a number
// C: if value occurs in array, return index of its first occurance
// if value == null, return -1
// do not use .indexOf()
// E: covered in C. what if array has multiple occurances of value?
// (it only wants the first occurance returned)
// what if value isn't in array? return -1

_.indexOf = function(array, value) {
// iterate through the array to see if an element matches <value>
    for (let i = 0; i < array.length; i++) {
 // if value occurs in index, return index of first occurance
        if (array[i] === value) {
            return i;
        }
    }       
// if value does not occur, return -1
    return -1;
};


/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

// I: function takes an array and a value as inputs
// O: function returns true if <array> contains <value>
// otherise false
// C: must use ternary (conditional) operator
// E: (1) did you use === ? (2) what if no <value> is given *see output

_.contains = function(array, value) {
    
    return array.includes(value) ? true : false;
}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

// I: function takes a collection and a function as inputs
// O: function calls <function> with args determined by collection type
// if array: function(collection[index], index, collection)
// if object: function(collection.key.value, collection.key, collection)

_.each = function(collection, func) {

    if (Array.isArray(collection)) {
        // if collection is an array
        for (let index = 0; index < collection.length; index++) {
            func(collection[index], index, collection);
        }
    } else if (typeof collection === 'object' && collection !== null) {
        // if collection is an object
        for (const key in collection) {
            if (collection.hasOwnProperty(key)) {
                func(collection[key], key, collection);
            }
        }
    }
}


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

// I: function takes an array as input
// O: function returns an array with all elements from input array with duplicates removed
// C: use indexOf from above

_.unique = function(array) {

    let newArray = [];
        _.each(array, function(value) {
            if (_.indexOf(newArray, value) === -1) {
                newArray.push(value);
            }
        });
        return newArray;
}

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
// for .filter we iterate through an array and the purpose of the callback function is to test each item in the array

_.filter = function(array, func){
    const output = [];

    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array) === true) {
            output.push(array[i]);
        }
    }

    return output;
}

// _.filter([1, 2, 3, 4], function(x){return x%2 === 0;});

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

// I: function takes an array and a function as inputs
// O: function calls input <function> for each element in <array> passing the args: 
// the element, its index, and <array>
// returns new array of elements for which calling <function> returned false
// logial inverse of _.filter()

_.reject = function(array, func) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array) === false) {
            newArray.push(array[i]);
        }
    }

    return newArray;
}


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
// I: functions takes an array and a function as inputs
// O: functio calls <function> for each element in <array>, passing it the args:
// element, key, array
// C: returns an array made up of 2 sub arrays:
// [0]: an array containing all values for which <function> returned something truthy
// [1]: an array containing all values for which <function> returned something falsy
// E: returns an array of arrays

_.partition = function(array, func) {
    let newArray = [[], []];
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array) === true) {
            newArray[0].push(array[i]);
        } else if (func(array[i], i, array) === false) {
                newArray[1].push(array[i]);
        }
    }
    return newArray;
}

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

//mapping is any time you take an array and you invoke a callback function on each item in the array, and returning the items acted upon, in a new array
// whether on an object or array, it takes it in, and it returns an array


_.map = function(collection, func) {
    const output = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            const result = func(collection[i], i, collection); 
                output.push(result);
            }
    } else if (typeof collection === 'object' && collection !== null) {
        for (const key in collection) {
            if (collection.hasOwnProperty(key)) {
               const result = func(collection[key], key, collection);
                    output.push(result);
            }
        }
    }
    return output;
}

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

// I: function takes an array of objects and a property
// O: function returns an array containing the value of <property> for every element in <array>
// C: must use _.map() in implementation

// we need to iterate over an array of objects, get the given property for every element in the array,
// and return its value to a new array
_.pluck = function(array, property) {
    return _.map(array, function(element) {
        return element[property];
    });
};

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

// _.every = function(collection, func) {
//     // if array
//     if(Array.isArray(collection)) {
//         // determine if func was not provided
//         if (func === undefined) {
//             for (let i = 0; i < collection.length; i++) {
//                 if (!collection[i]) {
//                     return false;
//                 }
//             }
//         } else {
//             for (let i = 0; i < collection.length; i++) {
//                 if (func(collection[i]) === false) {
//                     return false;
//                 }
//             }
//         }
//         } else { // it's an object
//             if (func === undefined) {

//             } else {
//             }
//     } 
// }

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
