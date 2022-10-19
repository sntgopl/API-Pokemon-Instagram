const pokeCard = document.querySelectorAll('.card');
const pokeImg = document.querySelectorAll('.pokemon-img').src;
const pokeName = document.querySelectorAll('.pokemon-name');
const like = document.querySelectorAll('.heart');

const renderHomepage = (data) => {
  const renderCard = `
<img class="pokemon-img" src="${data.spriites.front_default}" alt="Pokemon Image">
<div class="card-data">
  <h2 class="pokemon-name">${data.name}</h2>
  <div class="like-section"><i class="fa-regular fa-heart heart"></i><p>5 likes</p></div>
</div>
  `;
  pokeCard.innerHTML = renderCard;
}