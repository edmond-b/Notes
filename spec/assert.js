var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  },

  toBe: function(first, second) {
    if (first !== second) {
      throw new Error("Assertion failed: expected " + first + " but got " + second);
    }
  }
};
