import _ from 'lodash'; // eslint-disable-line
import './style.css';
import fetchPokemon from './modules/apis/fetchPokemon.js';
// import newAppId from './modules/apis/newAppId.js';
// import postComment from './modules/popup/postComment.js';
import fetchComments from './modules/popup/fetchComments.js';
import renderPopup from './modules/popup/renderPopup.js';

const openBtn = document.querySelector('#tmp-popup-open');
const popup = document.querySelector('#popup');

openBtn.addEventListener('click', () => {
  fetchPokemon(1, renderPopup);
  // newAppId();
  // postComment();
  fetchComments(1);
  popup.style.display = 'flex';
});