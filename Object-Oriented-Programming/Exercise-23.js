// Use a Mixin to Add Common Behavior Unrelated Objects

let bird = {
  name: "Donald",
  numLegs: 2,
};

let boat = {
  name: "Warrior",
  type: "race-boat",
};

// Only change code below this line

let glideMixin = (obj) => {
  // obj.method = () => (clg('text'));
  obj.glide = () => {};
};

glideMixin(boat);
glideMixin(bird);
