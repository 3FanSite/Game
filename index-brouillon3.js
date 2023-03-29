let images = document.querySelectorAll(".imgsGame img");
let inputContainer = document.querySelector("input");
let inputText = document.querySelector("input").value.toLocaleLowerCase();
let inputNull = "";
const DOMContainer = document.querySelector(".songslist");
let score = 3;

let reponsesContainer = document.querySelectorAll(".reponses > div").length;
let array = [];
const data = [
  {
    id: "id01",
    song: "la wave attitude",
    element: "La planche de surf, la crème solaire et la wax.",
    texte: `"Je me crème le « body »", "J'mets de la wax sur ma Board"`,
  },
  {
    id: "id02",
    song: "la galère d'un pirate",
    element: `La miniature du "Seigneur des anneaux" DL via eMule et la miniature du "Père-Noël en a une dure" DL via Mega Upload sur l'écran du PC Portable.`,
    texte: `"J'ai 69 gigas de films X et d'aventure Du ‘’Seigneur des Anneaux’’ au ‘’Père Noël en a une dure’’"`,
  },
  {
    id: "id02",
    song: "asdasdasd",
    element: `La miniature du "Seigneur des anneaux" DL via eMule et la miniature du "Père-Noël en a une dure" DL via Mega Upload sur l'écran du PC Portable.`,
    texte: `"J'ai 69 gigas de films X et d'aventure Du ‘’Seigneur des Anneaux’’ au ‘’Père Noël en a une dure’’"`,
  },
];

const button = document.querySelector(".button");

let lala = "";

inputContainer.addEventListener("input", (e) => {
  inputText = e.target.value.toLocaleLowerCase();
});

button.addEventListener("click", () => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].song.toLocaleLowerCase().includes(inputText.toLocaleLowerCase())) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
});

var lengthDiv = document.querySelectorAll(`answers > div`).length;
console.log(lengthDiv);
if (lengthDiv != 0) {
  var answDiv = document.querySelector(`.${image.id}0`);
  console.log(answDiv);
}

images.forEach((image) => {
  let imageID = document.getElementById(`${image.id}`);
  image.addEventListener("click", (e) => {
    let i = e.target.id;
    for (let j = 0; j < 20; j++) {
      if (i == songs[j].id) {
        console.log(songs[j].titre);
        console.log(i);
        console.log(songs[j].id);
        imageID.style.opacity = "0.6";
      }

      if (inputText === songs[j].titre.toLocaleLowerCase()) {
        console.log("hey");
      }
    }
  });
});
