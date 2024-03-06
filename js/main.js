let btn = document.querySelector(".btn");
let div = document.querySelector(".mydiv");

let Colors = ["red", "green", "blue", "white", "black"];
let i = 0;

btn.onclick = function () {
  div.style.backgroundColor = Colors[i];
  i++;
  if (i == 5) {
    i = 0;
  }
};
