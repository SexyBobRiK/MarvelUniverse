const btWiki = document.querySelector('.button__secondary')
const randomChrBt = document.getElementById('try-it')
const btHomepage = document.getElementById('bt_homepage')
async function fetchData() {
    try {
        const response = await fetch('http://gateway.marvel.com/v1/public/characters?ts=1714403935663&apikey=66335a5d3fde2c8e7b0e533b6ea5c549&hash=16b419b0d742aaf856f4696518ceee0c');
        const data = await response.json();

        let charactersArr = data.data.results
        let randomKeyObjCharacters = charactersArr[Math.floor(Math.random() * charactersArr.length)]
        let randomKeyObjChrValue = randomKeyObjCharacters
        if (randomKeyObjChrValue !== undefined && randomKeyObjChrValue !== null) {
            generateCharacters(randomKeyObjChrValue);
        } else {
            console.log('randomKeyObjChrValue is null or undefined');
        }
        randomCharactersWiki(randomKeyObjChrValue.urls);
        generatebtHomepage(randomKeyObjChrValue.urls)
    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    }
}

// Random Characters generate
const generateCharacters = (randomKeyObjChrValue) => {
    const randomcharImg = document.querySelector('.randomchar__img')
    const randomcharName = document.querySelector('.randomchar__name')
    const randomcharDescr = document.querySelector('.randomchar__descr')
    const srcCharactersImg = randomKeyObjChrValue.thumbnail.path + '.' + randomKeyObjChrValue.thumbnail.extension
    const charactersDesc = randomKeyObjChrValue.description.length == 0 ? 'UNKNOWN' : randomKeyObjChrValue.description
    randomcharImg.src = ''
    randomcharName.innerText = ''
    randomcharDescr.innerText = ''
    randomcharImg.src = `${srcCharactersImg}`
    randomcharName.innerText = `${randomKeyObjChrValue.name}`
    randomcharDescr.innerText = `${charactersDesc}`
}

// Random Character wiki URL
const randomCharactersWiki = (randomUrlWiki) => {
    let urlWiki = randomUrlWiki
    let charactersWiki = ''
    urlWiki.forEach(elementWiki => {
        if (elementWiki.type == 'wiki') {
            charactersWiki = elementWiki.url
        }
    });
    btWiki.addEventListener('click', () => {
        btWiki.href = `${charactersWiki}`
    })
}

// Random Character homepage URL
 const generatebtHomepage = (homepageUrl) => {
    let url = ''
    console.log(homepageUrl);
    homepageUrl.forEach(elHomepage => {
        if (elHomepage.type == 'detail') {
            url = elHomepage.url
        }
    })
    btHomepage.addEventListener('click', () => {
        btHomepage.href = `${url}`
    })
 }

// Random Character
randomChrBt.addEventListener('click', () => {
    fetchData();
})

fetchData();