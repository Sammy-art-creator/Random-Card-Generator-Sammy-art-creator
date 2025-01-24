/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let symbol = ["♦", "♥", "♠", "♣"];
  let values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const randomsymbol = symbol[Math.floor(Math.random() * symbol.length)];
  const randomvalues = values[Math.floor(Math.random() * values.length)];
  if (randomsymbol === "♥" || randomsymbol === "♦") {
    let cardsred = document.getElementById("card");
    cardsred.style.color = "red";
  } else {
    let cardsblack = document.getElementById("card");
    cardsblack.style.color = "black";
  }

  document.getElementById("symbol-top").innerText = randomsymbol;
  document.getElementById("value").innerText = randomvalues;
  document.getElementById("symbol-bottom").innerText = randomsymbol;
};
