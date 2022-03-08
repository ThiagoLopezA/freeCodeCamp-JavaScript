// Add elements to the end of an array using concat instead of push

let nonMutatingPush = (original, newItem) => original.concat(newItem);

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingPush(first, second);
