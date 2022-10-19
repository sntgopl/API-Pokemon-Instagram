import _ from 'lodash'; // eslint-disable-line
import './style.css';
import fetchPopup from './modules/fetchPopup.js';
import renderHomepage from './modules/homepage/renderHomepage.js';
import renderPopup from './modules/renderPopup.js';

const openBtn = document.querySelector('#tmp-popup-open');
const popup = document.querySelector('#popup');
const pokeCard = document.querySelector('#homePage');

openBtn.addEventListener('click', () => {
  fetchPopup(10, renderPopup);
  popup.style.display = 'flex';
  pokeCard.style.display = 'none';
});

pokeCard.innerHTML = '';

for (let i = 0; i <= 9; i += 1) {
  fetchPopup(i, renderHomepage);
}