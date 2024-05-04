const api =
  "https://gateway.marvel.com:443/v1/public/characters?limit=100&apikey=72c811efbcd934c114570bb4bf01a85d";
fetch(api)
  .then((res) => res.json())
  .then((data) => console.log(data));

const charItem = document.querySelector(".char__item");
charItem.addEventListener("click", async function () {
  await fetch(
    "http://gateway.marvel.com/v1/public/comics?ts=1714403935663&apikey=66335a5d3fde2c8e7b0e533b6ea5c549&hash=16b419b0d742aaf856f4696518ceee0c"
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


const itemIcon = document.querySelectorAll(".char__item");
const fixxBag = document.querySelector(".fixBag");
const fixBag2 = document.querySelector(".fixBag2");

function clickOnIcon(e) {
  itemIcon.forEach((e) => {
    e.classList.remove("char__item_selected");
  });

  e.target.classList.add("char__item_selected");
}

itemIcon.forEach((e) => {
  e.addEventListener("click", clickOnIcon);
});

function clickOnIcon(e) {
  const item = e.target.closest(".char__item");
  itemIcon.forEach((e) => {
    e.classList.remove("char__item_selected");
  });

  item.classList.add("char__item_selected");
}

itemIcon.forEach((e) => {
  e.addEventListener("click", clickOnIcon);
});
