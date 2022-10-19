const pokeCard = document.querySelector('#homePage');

const renderHomepage = (data) => {
  const renderCard = `
<div class="card">
<img class="pokemon-img" src="${data.sprites.front_default}" alt="Pokemon Image">
<div class="card-data">
  <h2 class="pokemon-name">${data.name}</h2>
  <div class="like-section"><i class="fa-regular fa-heart heart"></i><p>5 likes</p></div>
</div>
<button class="comment-button">Comments</button>
</div>
  `;
  pokeCard.innerHTML += renderCard;
};

export default renderHomepage;