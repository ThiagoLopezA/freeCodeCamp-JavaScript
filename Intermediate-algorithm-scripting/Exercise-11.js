// Conver HTML Entities

let convertHTML = (str) => {
  let temp = str.split("");
  for (let i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case "&":
        temp[i] = "&amp;";
        break;
      case "<":
        temp[i] = "&lt;";
        break;
      case ">":
        temp[i] = "&gt;";
        break;
      case '"':
        temp[i] = "&quot;";
        break;
      case "'":
        temp[i] = "&apos;";
        break;
    }
  }
  return temp.join("");
};

let res = convertHTML("Dolce & Gabbana");
console.log(res);

/*
& -> &amp
< -> &lt
> -> &gt
" -> &quot
' -> &apos
  */
