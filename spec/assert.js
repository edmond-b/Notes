var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  },

  toEq: function(first, second) {
    if (first !== second) {
      throw new Error("Assertion failed: expected " + first + " but got " + second);
    }
  }

};



// function(context)
//
//   function expect(first argument){
//    first argument = first argument;
//      return assert;
//    }
//
//    this.expect = expect
