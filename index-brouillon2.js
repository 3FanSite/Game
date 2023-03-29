let inputContainer = document.getElementById("inputCont");
let inputValue = document.getElementById("inputCont").value;
let valueNull = "";
let inputValueLower = inputValue.toLocaleLowerCase();

inputContainer.addEventListener("input", (e) => {
  inputValue = e.target.value;
  inputValueLower = inputValue.toLocaleLowerCase();
});

function play() {
  let score = 3;

  const image01 = document.getElementById("id01");
  const imageLight01 = document.getElementById("lightid01");
  const button01 = document.querySelector(".buttonid01");
  const song01 = document.querySelector(".id01 span").textContent.toLocaleLowerCase();
  const solut01 = document.querySelector(".id01");

  imageLight01.style.display = "none";
  button01.style.display = "none";
  solut01.style.display = "none";

  image01.addEventListener("click", () => {
    image01.style.opacity = "0.0";
    imageLight01.style.display = "block";
    button01.style.display = "block";

    button01.addEventListener("click", () => {
      if (inputValueLower === song01) {
        score = score + 0;
        score = score - 0;
        imageLight01.style.display = "none";
        image01.style.display = "none";
        button01.style.display = "none";
        inputContainer.value = "";
        solut01.style.display = "block";
      }
      if (inputValueLower == valueNull) {
        score = score + 0;
        score = score - 0;
      } else if (inputValueLower != song01 && inputValueLower != valueNull) {
        score = score - 1;
        inputContainer.value = "";
      }
    });
  });

  const image02 = document.getElementById("id02");
  const imageLight02 = document.getElementById("lightid02");
  const button02 = document.querySelector(".buttonid02");
  const song02 = document.querySelector(".id02 span").textContent.toLocaleLowerCase();
  const solut02 = document.querySelector(".id02");

  imageLight02.style.display = "none";
  button02.style.display = "none";
  solut02.style.display = "none";

  image02.addEventListener("click", () => {
    image02.style.opacity = "0.0";
    imageLight02.style.display = "block";
    button02.style.display = "block";
  });

  button02.addEventListener("click", () => {
    if (inputValueLower === song02 || inputValueLower === "la galere d'un pirate" || inputValueLower === "la galere dun pirate" || inputValueLower === "la galère dun pirate") {
      score = score + 0;
      score = score - 0;
      imageLight02.style.display = "none";
      image02.style.display = "none";
      button02.style.display = "none";
      inputContainer.value = "";
      solut02.style.display = "block";
    }
    if (inputValueLower == valueNull) {
      score = score + 0;
      score = score - 0;
    } else if (inputValueLower != song02 && inputValueLower != valueNull) {
      score = score - 1;
      inputContainer.value = "";
    }
  });
}

play();
