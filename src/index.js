import _ from 'lodash'; // eslint-disable-line
import './style.css';
import getPokemon from './modules/apis/getPokemon.js';
// import newAppId from './modules/apis/newAppId.js';
// import postComment from './modules/popup/postComment.js';
import getComments from './modules/popup/getComments.js';
import { renderPopup } from './modules/popup/renderPopup.js';
import homeSection from './modules/homepage/homepage.js';

const openBtn = document.querySelector('#tmp-popup-open');
const popup = document.querySelector('#popup');




openBtn.addEventListener('click', () => {
  getPokemon(1, renderPopup);
  // newAppId();
  // postComment();
  getComments(1);
  popup.style.display = 'flex';
});

import fetchList from './modules/homepage/homepage.js';

fetchList(10);