// import fetchPopup from '../fetchPopup';

const pokeCard = document.querySelector('#homePage');

const fetchLoop = (n) => {
  for (let i = 0; i < n; i += 1) {
    fetch(i);
  }
};

const createCard = (data) => {
  const card = `
  <div class="card">
  <img class="pokemon-img" src="${data.sprites.front_default}" alt="Pokemon Image">
  <div class="card-data">
    <h2 class="pokemon-name">${data.name}</h2>
    <div class="like-section"><i class="fa-regular fa-heart heart"></i><p>5 likes</p></div>
  </div>
  <button class="comment-button">Comments</button>
  </div>
  `;
   += card;
};

fetchLoop(9);

// const renderHomepage = async (n) => {
//   for (let i = 0; i < n; i += 1) {
//     pokemonList.push(fetchPopup(i, write));
//     // puedo definir variable y hacerla push en y hacer await del fetch
//   }
//   const list = pokemonList.map((poke) => `
//     <div class="card">
//     <img class="pokemon-img" src="${poke.sprites.front_default}" alt="Pokemon Image">
//     <div class="card-data">
//       <h2 class="pokemon-name">${poke.name}</h2>
//       <div class="like-section"><i class="fa-regular fa-heart heart"></i><p>5 likes</p></div>
//     </div>
//     <button class="comment-button">Comments</button>
//     </div>
//       `).join('');
//   pokeCard.innerHTML = list;
//   console.log(pokemonList);
// };

// export default renderHomepage;