// Write arrow functions with parameters

/* 
Before
    var myConcat = function(arr1, arr2) {
        return arr1.concat(arr2);
    };
*/

// After

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));
