const prvky = document.querySelectorAll(".frame");
const pocet = prvky.length; // počet prvků v carouselu
let aktivniIndex = 0; // aktivní prvek v carouselu

function odstranTridy() {
  prvky.forEach((prvek) => prvek.classList.remove("active", "previous"));
}

function aktualizujIndexy() {
  aktivniIndex = (aktivniIndex + 1) % pocet; // Nový aktivní index
  let dalsiIndex = (aktivniIndex + 1) % pocet; // Index následujícího prvku
  return dalsiIndex;
}

function aktualizujTridy(dalsiIndex) {
  prvky[aktivniIndex].classList.add("previous");
  prvky[dalsiIndex].classList.add("active");
}

function priKliku() {
  odstranTridy();
  const dalsiIndex = aktualizujIndexy();
  aktualizujTridy(dalsiIndex);
}

const prvekCarousel = document.querySelector(".carousel");
prvekCarousel.addEventListener("click", priKliku);
