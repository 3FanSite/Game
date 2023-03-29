const songs = [
  {
    id: "1",
    titre: "La wave attitude",
    infos: "La planche de surf, la crème solaire et la wax.",
    ref: `Je me crème le « body »", "J'mets de la wax sur ma Board`,
    domButton: `<div class="button button1"><i class="fas fa-check"></i></div>`,
  },
  {
    id: "2",
    titre: "La galère d'un pirate",
    infos: `La miniature du "Seigneur des anneaux" DL via eMule et la miniature du "Père-Noël en a une dure" DL via Mega Upload sur l'écran du PC Portable.`,
    ref: `"J'ai 69 gigas de films X et d'aventure Du ‘’Seigneur des Anneaux’’ au ‘’Père Noël en a une dure’’"`,
    domButton: `<div class="button button2"><i class="fas fa-check"></i></div>`,
  },
  {
    id: "3",
    titre: "I love U so much",
    infos: `Le message "10 ans... Je pense à toi mon coeur" sur le téléphone.`,
    ref: `"10 ans dans ma cellule, je pense à toi mon cœur"`,
    domButton: `<div class="button button3"><i class="fas fa-check"></i></div>`,
  },
  {
    id: "4",
    titre: "Génération 90's",
    infos: "Le magazine des Spice Girls et la VHS de Street Fighter.",
    ref: `"Les Spice Girls !", "Street Fighter, le film !"`,
    domButton: `<div class="button button4"><i class="fas fa-check"></i></div>`,
  },
  {
    id: "5",
    titre: "Babos à la playa",
    infos: "La tenture du Che.",
    ref: `"Oh non ma tenture vient de tomber", "Il sait que j'adore Che Guevara"`,
    domButton: `<div class="button button5"><i class="fas fa-check"></i></div>`,
  },
  {
    id: "6",
    titre: "Le plus grand des bonheurs",
    infos: "La liste des prénoms.",
    ref: `"Et puis Théo et Mathéo et Mathilda et puis Simon"`,
    domButton: `<div class="button button6"><i class="fas fa-check"></i></div>`,
  },
  {
    id: "7",
    titre: "C'est pas punk",
    infos: "Le poster dédicacé de Christophe Maé.",
    ref: `"Un poster dédicacé de Christophe Maé c'est pas reggae"`,
    domButton: `<div class="button button7"><i class="fas fa-check"></i></div>`,
  },
  {
    id: "8",
    titre: "Sombre héros",
    infos: "Le chapeau de Cow-Boy et la boite de cassoulet.",
    ref: `"Pendant qu'il mange son cassoulet", "Et il se prend pour un vrai cowboy"`,
    domButton: `<div class="button button8"><i class="fas fa-check"></i></div>`,
  },
  {
    id: "9",
    titre: "Hey baybay !",
    infos: "La bouteille de Kombucha pastèque sur le bureau.",
    ref: `"Ou d'la kombucha pastèque"`,
    domButton: `<div class="button button9"><i class="fas fa-check"></i></div>`,
  },
  {
    id: "10",
    titre: "Reviens",
    infos: "Le soutien gorge, le rouge à lèvres et la lettre d'amour.",
    ref: `"Le rouge à lèvres, le soutien-gorge, crois moi, Ce n’étaient pas les miens Les mots d’amour[...]"`,
    domButton: `<div class="button button10"><i class="fas fa-check"></i></div>`,
  },
  {
    id: "11",
    titre: "Cliquer comme un con",
    infos: `La publicité "Programme de Tony, coach de vie" sur le Mac.`,
    ref: `"Moi c’est Tony, Ton nouveau coach de vie, Un corps d'athlète pour moins de 5000 euros"`,
    domButton: `<div class="button button11"><i class="fas fa-check"></i></div>`,
  },
  {
    id: "12",
    titre: "Bon voyage",
    infos: "L'explosion dans le ciel (fenêtre).",
    ref: `"Une explosion dans le ciel, une lumière de toute beauté"`,
    domButton: `<div class="button button12"><i class="fas fa-check"></i></div>`,
  },
  {
    id: "13",
    titre: "Le ver",
    infos: "La pomme avec le ver.",
    ref: `"J'ai mangé une pomme ce matin Woohoho, Et puis y'avait un ver dedans"`,
    domButton: `<div class="button button13"><i class="fas fa-check"></i></div>`,
  },
  {
    id: "14",
    titre: "Et à la fin",
    infos: "La scène de la mort de Marion Cotillard dans Batman.",
    ref: `"A la fin du dernier Batman on se rend compte que le méchant, N'était pas celui qu'on pensait, que c'était Marion Cotillard"`,
    domButton: `<div class="button button14"><i class="fas fa-check"></i></div>`,
  },
  {
    id: "15",
    titre: "Cheese Powers",
    infos: `Le logo "Cheese Powers" sur le coussin.`,
    ref: `"Cheese Powers, Défenseurs contre le mal"`,
    domButton: `<div class="button button15"><i class="fas fa-check"></i></div>`,
  },
  {
    id: "16",
    titre: "Mon rêve",
    infos: "La miniature de la Cadillac rose sous le sofa.",
    ref: `"J'ai rêvé que je conduisais une Cadillac. Elle était rose et elle brillait comme mes santiags."`,
    domButton: `<div class="button button16"><i class="fas fa-check"></i></div>`,
  },
  {
    id: "17",
    titre: "Ma cigarette",
    infos: "Le cendrier avec la cigarette allumée.",
    ref: `"Ma cigarette est allumée, elle se consume comme du papier"`,
    domButton: `<div class="button button17"><i class="fas fa-check"></i></div>`,
  },
  {
    id: "18",
    titre: "Imagine la galère",
    infos: "Le doctorat de médecine et de diplôme d'architecte.",
    ref: `"35 ans, à moi la vie active avec mon doctorat de médecine et mon diplôme d’architecte"`,
    domButton: `<div class="button button18"><i class="fas fa-check"></i></div>`,
  },
  {
    id: "19",
    titre: "Comptez sur moi",
    infos: "Le carton de meuble Ikea et les recommandés de Laposte.",
    ref: `"Je ne suis pas dispo, j'ai un meuble à monter, Et j’dois aller à la poste, j'en ai pour la journée"`,
    domButton: `<div class="button button19"><i class="fas fa-check"></i></div>`,
  },
  {
    id: "20",
    titre: "BB Rockers",
    infos: "Le t-shirt Ramones.",
    re: `"J'ai un t-shirt Ramones sans savoir qui c'est vraiment"`,
    domButton: `<div class="button button20"><i class="fas fa-check"></i></div>`,
  },
];

// MES VARIABLES

// Je focus toutes mes images dans le DOM.
let images = document.querySelectorAll(".imgsGame img");
// Je focus mon input.
let inputContainer = document.querySelector("input");
// Je focus la valeur de mon input (ce qui est tapé par l'utilisateur) et je le transforme en minuscules.
let inputText = document.querySelector("input").value.toLocaleLowerCase();
// Si la valeur de mon input est vide.
let inputNull = "";
// J'initialise le score à 0.
let array = [];
// Je focus la balise qui contient les DIV de mes réponses (une div = une réponse). Elles vont s'incrémenter au fur et à mesure des réponses données.
// J'identifie son nombre de div. Si ma length = 20 alors le joueur a terminé le jeu car il y a 20 réponses.
let reponsesContainer = document.querySelector(`.answers`);
let reponsesLength = document.querySelectorAll(".answers > div").length;
let errorContainer = document.querySelector(`.error`);
const scoreContainer = document.querySelector(".score > div");
// Je focus le bouton "valider".
const button = document.querySelector(".button");

const startButton = document.querySelector("[data-action=start]");
const stopButton = document.querySelector("[data-action=stop]");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const timerContainer = document.querySelector(".timer");
const alertContainer = document.querySelector(".alertContainer");

let timerTime = 0;
let isRunning = false;
let interval;

function startTimer() {
  if (isRunning) return;

  isRunning = true;
  interval = setInterval(incrementTimer, 850);
}

function stopTimer() {
  if (!isRunning) return;

  isRunning = false;
  clearInterval(interval);
}

function pad(number) {
  return number < 10 ? "0" + number : number;
}

function incrementTimer() {
  timerTime++;

  const numOfminutes = Math.floor(timerTime / 60);
  const numOfSeconds = timerTime % 60;

  minutes.innerText = pad(numOfminutes);
  seconds.innerText = pad(numOfSeconds);
}

// Méthode permettant de récupérer le contenu de l'input.

inputContainer.addEventListener("input", (e) => {
  inputText = e.target.value.toLocaleLowerCase();
});

// Méthode forEach.
// Chaque élément individuel contenu dans "images" se nomme "PNG".
images.forEach((PNG) => {
  // J'identifie l'ID de chaque PNG.
  let pngID = document.getElementById(`${PNG.id}`);

  // Lorsque je clique sur une image.
  pngID.addEventListener("click", () => {
    // J'affiche la valeur textuelle de mon ID "1, 2, 3..."
    let idFinder = pngID.id;
    // Je récupère dans ma DATA le titre de la chanson en fonction de l'image cliquée.
    let songTitle = songs[idFinder].titre.toLocaleLowerCase();

    function similarity(inputText, songTitle) {
      let longer = inputText;
      let shorter = songTitle;
      if (inputText.length < songTitle.length) {
        longer = songTitle;
        shorter = inputText;
      }
      let longerLength = longer.length;
      if (longerLength == 0) {
        return 1.0;
      }
      return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
    }

    function editDistance(inputText, songTitle) {
      let costs = new Array();
      for (let i = 0; i <= inputText.length; i++) {
        let lastValue = i;
        for (let j = 0; j <= songTitle.length; j++) {
          if (i == 0) costs[j] = j;
          else {
            if (j > 0) {
              let newValue = costs[j - 1];
              if (inputText.charAt(i - 1) != songTitle.charAt(j - 1)) newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
              costs[j - 1] = lastValue;
              lastValue = newValue;
            }
          }
        }
        if (i > 0) costs[songTitle.length] = lastValue;
      }
      return costs[songTitle.length];
    }

    // Lorsque je clique sur valider
    button.addEventListener("click", () => {
      let pourcent = similarity(inputText, songTitle);
      let pourcentRound = pourcent * 100;
      let scorePourcent = Math.round(pourcentRound);

      if (scorePourcent > 75) {
        array.push(inputText);
        displayArray();
        inputContainer.value = "";
        inputText = "";
        inputText.value = "";
        pngID.style.display = "none";

        alertContainer.innerHTML = `<div class="alert">
        <span>Chanson trouvée !</span>
        ${songTitle}
        <span>${array.length} / 20</span>
        </div>`;

        function hideAlert() {
          alertContainer.innerHTML = ``;
        }
        window.setTimeout(hideAlert, 2000);

        alertContainer.set;

        test20();
      } else {
        alertContainer.innerHTML = `<div class="alert">
        Nope !
        </div>`;

        function hideAlert() {
          alertContainer.innerHTML = ``;
        }
        window.setTimeout(hideAlert, 2000);

        alertContainer.set;

        test20();
      }
    });
  });
});

function displayArray() {
  let uniqueArray = [...new Set(array)];
  scoreContainer.innerHTML = `${uniqueArray.length} / 20`;

  function displaySongList(uniqueArray) {
    const listingSongs = uniqueArray.map((song) => `<div>${song}</div>`).join("");
    reponsesContainer.innerHTML = listingSongs;
  }
  displaySongList(uniqueArray);
}

const mainContent = document.querySelector("main");
mainContent.addEventListener("click", startTimer);

const winner = document.querySelector(".winner");
const winnerh3 = document.querySelector(".answersh3");

function test20() {
  console.log(array.length);

  if (array.length == 20) {
    mainContent.style.display = "none";
    reponsesContainer.style.display = "none";
    winnerh3.style.display = "none";
    console.log("hey");
    let timeTime = timerTime;
    let temps = new Date();
    temps.setTime(timeTime * 1000);
    console.log();
    timerContainer.innerHTML = `${temps.getHours() - 1 + ":" + temps.getMinutes() + ":" + temps.getSeconds()}`;
  }
}
