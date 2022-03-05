// Use an IIFE to Create a Module

/*
let isCuteMixin = function(obj) {
    obj.isCute = function() {
      return true;
    };
  };
let singMixin = function(obj) {
    obj.sing = function() {
      console.log("Singing to an awesome tune");
    };
  };
*/

let funModule = (function () {
  return {
    isCuteMixin: function (obj) {
      obj.isCute = () => true;
    },
    singMixin: function (obj) {
      obj.sing = () => console.log("Singing to an awesome tune");
    },
  };
})();
