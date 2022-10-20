import _ from 'lodash'; // eslint-disable-line
import './style.css';
import fetchPopup from './modules/fetchPopup.js';
import renderPopup from './modules/renderPopup.js';
// import renderHomepage from './modules/homepage/renderHomepage';

const openBtn = document.querySelector('#tmp-popup-open');
const popup = document.querySelector('#popup');

openBtn.addEventListener('click', () => {
  fetchPopup(10, renderPopup);
  popup.style.display = 'flex';
  pokeCard.style.display = 'none';
});

// renderHomepage(3);
