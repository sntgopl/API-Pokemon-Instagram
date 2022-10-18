import _ from 'lodash';
import './style.css';
import fetchPopup from './modules/fetchPopup.js';

const openBtn = document.querySelector('#tmp-popup-open');
const popup = document.querySelector('#popUp');

openBtn.addEventListener('click', () => {
  fetchPopup(2);
  popup.style.display = 'flex';
});