// Si ce que j'entre dans mon input correspond à "Titre" dans ma data
if (inputText === songTitle) {
  // Je supprime l'image qui a été trouvée.
  pngID.style.display = "none";
  // Ajout des réponses justes dans ma balise.
  reponsesContainer.innerHTML += `<div class="song${pngID.id}">${songTitle}</div>`;
  // Je focus chaque réponse ajoutée au DOM
  let reponseID = document.querySelector(`.song${pngID.id}`).textContent.toLocaleLowerCase();
  console.log(reponseID + " Réponse");
  console.log(inputText + " Input text");

  if (inputText != reponseID) {
    score = score + 1;
    reponsesContainer.innerHTML += ``;
    console.log(score);
  }
}

// Je vide mon input
inputContainer.value = "";
inputText = "";
inputText.value = "";
