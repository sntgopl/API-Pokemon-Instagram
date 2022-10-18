import _ from 'lodash';
import './style.css';
import fetchPopup from './modules/fetchPopup.js';

const openBtn = document.querySelector('#tmp-popup-open');
const popup = document.querySelector('#popUp');

openBtn.addEventListener('click', () => {
  popup.style.display = 'flex';
  fetchPopup(1);
});

const closeBtn = document.querySelector('#close-btn');

closeBtn.addEventListener('click', () => {
  closeBtn.parentNode.style.display = 'none';
});