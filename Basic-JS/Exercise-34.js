// Understand String Immutability

/*
U can't do this:
    let myStr = "Bob";
    myStr[0] = "J";
That's not going to be Job, 
instead of that assignment u can do this:
    let myStr = "Bob";
    myStr = "Job";
*/

let myStr = "Jello World";
myStr = "Hello World";
