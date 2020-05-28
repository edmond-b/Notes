var assert = {

  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log("Pass");
    }
  },

  toEq: function(first, second) {
    if (first !== second) {
      throw new Error("Assertion failed: got " + first + " expected " + second);
    } else {
      console.log("Pass");
    }
  }

};
