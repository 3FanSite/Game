const imgs = document.querySelectorAll("img");
const button = document.querySelector(".button");
let score = 3;

let inputContainer = document.getElementById("inputCont");
let inputValue = document.getElementById("inputCont").value;
let valueNull = "";
let inputValueLower = inputValue.toLocaleLowerCase();

inputContainer.addEventListener("input", (e) => {
  inputValue = e.target.value;
  inputValueLower = inputValue.toLocaleLowerCase();
});

const rep01 = document.querySelector(".id01 span");
const sol01 = document.querySelector(".id01");
sol01.style.display = "none";
const rep01Rep = rep01.textContent;
const rep01RepLower = rep01Rep.toLocaleLowerCase();
const img01 = document.getElementById("id01");
console.log(rep01RepLower);

button.addEventListener("click", () => {
  if (inputValueLower === rep01RepLower) {
    img01.style.display = "none";
    console.log(score);
    inputContainer.value = "";
    sol01.style.display = "block";
    score = score + 0;
  }
  if (inputValueLower == valueNull) {
    score = score + 0;
    console.log(score);
  } else if (inputValueLower != rep01RepLower && inputValueLower != "" && inputValueLower != "<empty string>" && inputValueLower != null) {
    score = score - 1;
    console.log(score);
    inputContainer.value = "";
    console.log(inputValueLower);
  }
});

const rep02 = document.querySelector(".id02 span");
const sol02 = document.querySelector(".id02");
const img02 = document.getElementById("id02");
sol02.style.display = "none";
const rep02Rep = rep02.textContent;
const rep02RepLower = rep02Rep.toLocaleLowerCase();
console.log(rep02RepLower);

button.addEventListener("click", () => {
  if (inputValueLower === rep02RepLower || inputValueLower === "la galere d'un pirate" || "la galere dun pirate" || "la galère d'un pirate" || "la galére d'un pirate") {
    img02.style.display = "none";
    console.log(score);
    inputContainer.value = "";
    sol02.style.display = "block";
  }
  if (inputValueLower != rep02RepLower && inputValueLower != valueNull) {
    score = score - 1;
    console.log(score);
    inputContainer.value = "";
  }
  if (inputValueLower == valueNull) {
    score = score + 0;
    console.log(score);
  }
});
