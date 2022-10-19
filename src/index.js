import _ from 'lodash'; // eslint-disable-line
import './style.css';
import fetchPopup from './modules/fetchPopup.js';
// import newId from './modules/newId.js';
// import addComment from './modules/addComment.js';
import comments from './modules/comments.js';

const openBtn = document.querySelector('#tmp-popup-open');
const popup = document.querySelector('#popUp');

openBtn.addEventListener('click', () => {
  fetchPopup(1);
  // newId();
  // addComment();
  comments(1);
  popup.style.display = 'flex';
});