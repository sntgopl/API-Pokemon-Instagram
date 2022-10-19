import _ from 'lodash'; // eslint-disable-line
import './style.css';
import fetchPopup from './modules/fetchPopup.js';

const openBtn = document.querySelector('#tmp-popup-open');
const popup = document.querySelector('#popup');

openBtn.addEventListener('click', () => {
  fetchPopup(10);
  popup.style.display = 'flex';
});