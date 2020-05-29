"use strict";

function expect(actual){

  return {
    toEqual: function(expected){
      if(actual === expected){
        console.log("Pass")
      } else {
        console.log("Fail")
      }
    },

    toBeAnArray: function(){
      if(actual.constructor.name === "Array"){
        console.log("Pass")
      } else {
        console.log("Fail")
      }
    }
  }
}

function it(label, callback){
  console.log(`Test: ${label}`)
  callback()
}

function describe(label, callback){
  console.log(`- ${label} -`)
  callback()
}




// var assert = {
//
//   isTrue: function(assertionToCheck) {
//     if (!assertionToCheck) {
//       throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
//     } else {
//       console.log("Pass");
//     }
//   },
//
//   toEq: function(first, second) {
//     if (first !== second) {
//       throw new Error("Assertion failed: got " + first + " expected " + second);
//     } else {
//       console.log("Pass");
//     }
//   }
//
// };
