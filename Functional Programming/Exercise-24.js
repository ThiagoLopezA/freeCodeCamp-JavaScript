// Introduction to currying and partial application

const add = (x) => (y) => (z) => x + y + z;

add(10)(20)(30);
