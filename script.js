const api =
  "https://gateway.marvel.com:443/v1/public/characters?limit=100&apikey=72c811efbcd934c114570bb4bf01a85d";
fetch(api)
  .then((res) => res.json())
  .then((data) => console.log(data));

const charItem = document.querySelector(".char__item");
charItem.addEventListener("click", async function () {
  await fetch(
    "https://gateway.marvel.com:443/v1/public/characters?limit=100&apikey=72c811efbcd934c114570bb4bf01a85d"
  )
    .then((res) => res.json())
    .then((data) => console.log(data));
  console.log(charItem);
});

const main = document.querySelector("#characters-for-script");
const app = document.querySelector("#comics-for-script");
const comics = document.querySelector("#comics-switch");
comics.addEventListener("click", () => {
  app.style.display = "block";
  main.style.display = "none";
});

const char = document.querySelector("#characters-switch");
char.addEventListener("click", () => {
  app.style.display = "none";
  main.style.display = "block";
});
