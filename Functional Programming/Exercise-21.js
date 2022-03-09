// Apply functional programming to convert strings to URL Slugs

// Only change code below this line
function urlSlug(title) {
  return title
    .trim()
    .split(/\s+/)
    .map((e) => e.toLowerCase())
    .join("-");
}
// Only change code above this line
let res = urlSlug(" Winter Is  Coming");
console.log(res);
