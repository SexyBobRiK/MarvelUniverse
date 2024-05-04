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

// Поиск героев
let arrForHeroes = [
  "Тор",
  "Железный Человек",
  "Черная Вдова",
  "Халк",
  "Капитан Америка",
  "Капитан Марвел",
  "Человек Паук",
  "Человек Муравей",
  "Звездный Лорд",
  "Енот полоскун",
];

const infoHeroes = document.querySelector(".char__info");
const searchHeroes = document.querySelector("#search-for-char");

searchHeroes.addEventListener("input", () => {
  if (searchHeroes.value == "Тор") {
    infoHeroes.innerHTML = `<img width="200" src="./img/thor.jpeg">
    <p> Is a prominent god in Germanic paganism. <br> In Norse mythology, he is a <br> hammer-wielding god associated with lightning, <br> thunder, storms, sacred groves <br> and trees, strength, the protection <br> of humankind, hallowing, and fertility.</p>`;
  } else if (searchHeroes.value == "Железный Человек") {
    infoHeroes.innerHTML = `<img width="300" src="./img/ironman.jpeg">
    <p>Iron Man is a superhero appearing in <br> American comic books published by Marvel Comics. <br> Co-created by writer and editor Stan Lee, <br> developed by scripter Larry Lieber, and designed <br> by artists Don Heck and Jack Kirby, the character <br> first appeared in Tales of Suspense #39 <br> in 1963, and received his own title <br> with Iron Man #1 in 1968.</p>`;
  } else if (searchHeroes.value == "Человек Паук") {
    infoHeroes.innerHTML = `<img width="300" src="./img/spiderman.jpg">
    <p>Iron Man is a superhero appearing in <br> American comic books published by Marvel Comics. <br> Co-created by writer and editor Stan Lee, <br> developed by scripter Larry Lieber, and designed <br> by artists Don Heck and Jack Kirby, the character <br> first appeared in Tales of Suspense #39 <br> in 1963, and received his own title <br> with Iron Man #1 in 1968.</p>`;
  } else if (searchHeroes.value == "Звездный лорд") {
    infoHeroes.innerHTML = `<img width="300" src="./img/starlord.jpg">
    <p>Star-Lord (Peter Jason Quill) is a superhero <br> appearing in American comic books published by Marvel Comics. <br> Created by Steve Englehart and Steve Gan, the character <br> first appeared in Marvel Preview #4 (January 1976).</p>`;
  } else if (searchHeroes.value == "Капитан Америка") {
    infoHeroes.innerHTML = `<img width="300" src="./img/amir.jpg">
    <p>Captain America is a superhero created <br> by Joe Simon and Jack Kirby who appears in American comic <br> books published by Marvel Comics. The character <br> first appeared in Captain America Comics #1, <br> published on December 20, 1940, by Timely Comics, <br> a corporate predecessor to Marvel. Captain America's <br> civilian identity is Steve Rogers, a frail man <br> enhanced to the peak of human physical perfection by an experimental <br> "super-soldier serum" after joining the United States Army <br> to aid the country's efforts in World War II.</p>`;
  } else if (searchHeroes.value == "Капитан Марвел") {
    infoHeroes.innerHTML = `<img width="300" src="./img/marvelkap.jpeg">
    <p>Captain Marvel is a 2019 American <br> superhero film based on Marvel Comics featuring <br> the character Carol Danvers / Captain Marvel. <br> Produced by Marvel Studios and distributed <br> by Walt Disney Studios Motion Pictures, it is the <br> 21st film in the Marvel Cinematic Universe (MCU). <br> The film was directed by Anna Boden and <br> Ryan Fleck from a screenplay they co-wrote <br> with Geneva Robertson-Dworet.</p>`;
  } else if (searchHeroes.value == "Черная Вдова") {
    infoHeroes.innerHTML = `<img width="300" src="./img/wido.jpg">
    <p>Black Widow is a 2021 American superhero <br> film based on Marvel Comics featuring the character of the same name. <br> Produced by Marvel Studios and distributed by Walt Disney <br> Studios Motion Pictures, it is the 24th film <br> in the Marvel Cinematic Universe (MCU).</p>`;
  } else if (searchHeroes.value == "Халк") {
    infoHeroes.innerHTML = `<img width="300" src="./img/chalk.jpg">
    <p>The Hulk is a superhero appearing in American <br> comic books published by Marvel Comics. Created <br> by writer Stan Lee and artist Jack Kirby, the character first <br> appeared in the debut issue of The <br> Incredible Hulk (May 1962).</p>`;
  } else if (searchHeroes.value == "Енот полоскун") {
    infoHeroes.innerHTML = `<img width="300" src="./img/enot.jpg">
    <p>Rocket Raccoon, commonly referred to simply <br> as Rocket, is a fictional character in the Marvel Cinematic Universe <br> (MCU) media franchise voiced by Bradley Cooper and based on the Marvel <br> Comics character of the same name.</p>`;
  } else if (searchHeroes.value == "Человек Муравей") {
    infoHeroes.innerHTML = `<img width="300" src="./img/myra.jpg">
    <p>Ant-Man held its world premiere <br> at the Dolby Theatre in Hollywood, Los Angeles, on June 29, 2015, <br> and was released in the United States on July 17, <br> as the final film in Phase Two of the MCU.</p>`;
  }
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