import pokeCard from './homepage/renderHomepage.js';

const popup = document.querySelector('#popup');

const renderPopup = (data) => {
  const content = `
  <img class="popup-img" src="${data.sprites.front_default}" alt="popup image">
  <h2>${data.name}</h2>
  <div class="attributes">
    <p>Attribute 1: Value 1</p>
    <p>Attribute 2: Value 2</p>
    <p>Attribute 3: Value 3</p>
    <p>Attribute 4: Value 4</p>
  </div>
  <button type="button" id="close-btn">X</button>
  `;
  popup.innerHTML = content;

  const closeBtn = document.querySelector('#close-btn');
  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    pokeCard.style.display = 'flex';
  });
};

export default renderPopup;