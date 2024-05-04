// async function Marvel() {
//     await fetch(`http://gateway.marvel.com/v1/public/comics?ts=1714403935663&apikey=66335a5d3fde2c8e7b0e533b6ea5c549&hash=16b419b0d742aaf856f4696518ceee0c`)
//         .then((response) => response.json())
//         .then(data => arr1 = data)
//     console.log(arr1.data.results);

//     divWithInfo.innerHTML += `
//     `
// }

// Marvel()

async function displayComics() {
    try {
        const response = await fetch('http://gateway.marvel.com/v1/public/comics?limit=20&ts=1714403935663&apikey=66335a5d3fde2c8e7b0e533b6ea5c549&hash=16b419b0d742aaf856f4696518ceee0c');
        const data = await response.json();
        const comics = data.data.results;
        const comicsContainer = document.querySelector('.comics__grid');

        let count = 0;
        let rowHTML = '';

        comics.forEach((comic, index) => {

            rowHTML += `
                <li class="comics__item">
                    <a href="#">
                        <img src="${comic.thumbnail.path}.${comic.thumbnail.extension}" alt="${comic.title}" class="comics__item-img">
                        <div class="comics__item-name">${comic.title}</div>
                        <div class="comics__item-price">${comic.prices[0].price}$</div>
                    </a>
                </li>
            `;

            count++;

            if (count === 4 || index === comics.length - 1) {

                comicsContainer.innerHTML += `${rowHTML}`;

                count = 0;
                rowHTML = '';
            }
        });
    } catch {
      
    }
}

displayComics();
