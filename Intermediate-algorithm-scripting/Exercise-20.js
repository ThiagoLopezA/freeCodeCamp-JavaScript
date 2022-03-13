// Make a Person

const Person = function (firstAndLast) {
  let person = firstAndLast;
  this.getFirstName = () => person.split(" ")[0];
  this.getLastName = () => person.split(" ")[1];
  this.getFullName = () => person;
  this.setFirstName = (first) => (person = first + " " + person.split(" ")[1]);
  this.setLastName = (last) => (person = person.split(" ")[0] + " " + last);
  this.setFullName = (firstAndLast) => (person = firstAndLast);
};

const bob = new Person("Bob Ross");
console.log(bob.getFirstName());
bob.setFirstName("Manuel");

/*
console.log(bob.getLastName());
console.log(bob.getFullName());
*/
