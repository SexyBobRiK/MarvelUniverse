
// поиск персонажа

const input = document.querySelector('#search-for-char')
const showCharDiv = document.querySelector('.char__info-block')
const showCharNone = document.querySelector('.char__info-none')
const notFoundChar = document.querySelector('#error')
const charCards = document.querySelector('.char__grid')
const loadMore = document.querySelector('.button__long')

// ссылка 
let ts = "1714404331028"
let publicKey = "00385e680fe957234417cae1fff11a6e"
let hashVal = "3c4809b7f5e6b0aa60fa1c4bfaceb5a8"
const [timestamp, apiKey, hashValue] = [ts, publicKey, hashVal]

// сама функция для получения персонажа
const getResult = async (resultValue) => {

   const API = `https://gateway.marvel.com:443/v1/public/characters?limit=100&ts=${ts}&apikey=${publicKey}&hash=${hashVal}&name=${resultValue}`
   
   const response = await fetch(API)
   const jsonData = await response.json()
   try {
      if (jsonData.data && jsonData.data.results.length > 0) {
         const character = jsonData.data.results[0]
         showCharDiv.innerHTML = `
            <h2>${character.name}</h2>
            <img class="char-img" src="${character.thumbnail.path}.${character.thumbnail.extension}" alt="#">
            <p>Description: ${character.description}</p>
         `
         showCharNone.style.display = 'none'
         notFoundChar.innerHTML = ""
      } else {
         showCharDiv.innerHTML = ""
         notFoundChar.innerHTML = "Not a character from Marvel!"
      }
   } catch (error) {
      console.error('Error fetching character data:', error)
   }
}

input.addEventListener('input', function() {
   let result = input.value
   getResult(result)
 })


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  Получение всех персонажей списком по 3 в ряд

// сама функция
const getCharResults = async () => {
   const API = `https://gateway.marvel.com:443/v1/public/characters?limit=100&ts=${ts}&apikey=${publicKey}&hash=${hashVal}`;
   
   try {
      const response = await fetch(API)
      const data = await response.json()
      
      // получим сначала класс 
      const charColumn = document.querySelector('.char__grid')

      charColumn.innerHTML = '' // Очищаем содержимое перед добавлением новых элементов
      data.data.results.slice(0, 9).forEach(elemName => {
         charColumn.innerHTML += `
         <li class="char__item" value="${elemName.name}">
            <img value="${elemName.name}" src="${elemName.thumbnail.path}.${elemName.thumbnail.extension}" alt="#">
            <div value="${elemName.name}" class="char__name">${elemName.name}</div>
         </li>
         `
      })
   } catch (error) {
      console.error('Error fetching character data:', error);
   }
}


// вызов функции
getCharResults()

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// load more 

// function
const getCharResults2 = async () => {
   const charColumn = document.querySelector('.char__grid')
   const API = `https://gateway.marvel.com:443/v1/public/characters?limit=100&ts=${ts}&apikey=${publicKey}&hash=${hashVal}`;

   try {
      const response = await fetch(API)
      const data = await response.json()
       

      data.data.results.slice(9, 18).forEach(elemName => {
         charColumn.innerHTML += `
            <li class="char__item">
               <img src="${elemName.thumbnail.path}.${elemName.thumbnail.extension}" alt="#">
               <div class="char__name">${elemName.name}</div>
            </li>
         `
      })
   } catch (error) {
      console.error('Error fetching character data:', error);
   }
}


// вызов функции по кнопке
loadMore.addEventListener('click', getCharResults2)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// нажатие на перса и инфа о нём


const getItemsInfo = async () => {
   const getItem = document.querySelectorAll('.char__grid')
   // const API = `https://gateway.marvel.com:443/v1/public/characters?limit=100&ts=${ts}&apikey=${publicKey}&hash=${hashVal}`;
   // const response = await fetch(API)
   // const data = await response.json()
    
   getItem.forEach(function (item) {
      item.addEventListener('click', function(e) {
         let clickElement = e.target
         let elementValue = clickElement.getAttribute('value')
         getResult(elementValue)
      })
   })
}

// Вызов функции
getItemsInfo()
