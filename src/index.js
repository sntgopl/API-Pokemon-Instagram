import _ from 'lodash'; // eslint-disable-line
import './style.css';
import fetchPopup from './modules/fetchPopup.js';
import renderPopup from './modules/renderPopup.js';
import loopRender from './modules/homepage/loopRenderHomepage.js';

const openBtn = document.querySelector('#tmp-popup-open');
const popup = document.querySelector('#popup');
const pokeCard = document.querySelector('#homePage');

openBtn.addEventListener('click', () => {
  fetchPopup(10, renderPopup);
  popup.style.display = 'flex';
  pokeCard.style.display = 'none';
});

loopRender(6);