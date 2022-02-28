// Counting cards

let count = 0;

function cc(card) {
  var regex = /[JQKA]/;
  if (card >= 2 && card <= 6) {
    count++;
  } else if (regex.test(card) || card == 10) {
    count--;
  }

  if (count > 0) return count + " Bet";
  return count + " Hold";
}

cc(2);
cc(3);
cc(7);
cc("K");
cc("A");
