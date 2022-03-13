// Palindrome Checker

function palindrome(str) {
  str = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  let reversed = str.split("").reverse().join("");
  if (reversed === str) {
    return true;
  }
  return false;
}

palindrome("eyes");
