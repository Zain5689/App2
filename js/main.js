let btn = document.querySelector(".btn");
let div = document.querySelector(".mydiv");
let button = document.querySelector(".button");
let body = document.querySelector("body");
let BackgrounColors = ["black", "green", "white", "blue", "red"];
let Colors = ["red", "green", "blue", "white", "black"];
let i = 0;
let x = 0;
btn.onclick = function () {
  div.style.backgroundColor = Colors[i];
  i++;
  if (i == 5) {
    i = 0;
  }
};
button.onclick = function () {
  body.style.backgroundColor = BackgrounColors[x];
  x++;
  if (x == 5) {
    x = 0;
  }
};
