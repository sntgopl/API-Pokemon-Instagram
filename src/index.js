import _ from 'lodash'; // eslint-disable-line
import './style.css';
import fetchPopup from './modules/fetchPopup.js';
import newId from './modules/newId.js';

const openBtn = document.querySelector('#tmp-popup-open');
const popup = document.querySelector('#popUp');

openBtn.addEventListener('click', () => {
  fetchPopup(10);
  newId();
  popup.style.display = 'flex';
});