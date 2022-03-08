// Combine two arrays using the concat method

let nonMutatingConcat = (original, attach) => original.concat(attach);

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingConcat(first, second);
