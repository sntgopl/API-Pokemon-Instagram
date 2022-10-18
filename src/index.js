import _ from 'lodash';
import './style.css';
import fetchPopup from './modules/fetchPopup.js';

const openBtn = document.querySelector('#tmp-popup-open');
const popup = document.querySelector('#popUp');

const renderPopup = () => {
  const content = `
  <img class="popup-img" src="https://thumbs.dreamstime.com/z/future-sci-fi-spaceship-front-view-against-black-background-36644652.jpg" alt="template image">
  <h2>Pokemon Name</h2>
  <p>Attribute 1: Value 1</p>
  <p>Attribute 2: Value 2</p>
  <p>Attribute 3: Value 3</p>
  <p>Attribute 4: Value 4</p>
  <button type="button" id="close-btn">X</button>
  `;
  popup.innerHTML = content;
};
renderPopup();
openBtn.addEventListener('click', () => {
  popup.style.display = 'flex';
  fetchPopup(1);
  // renderPopup();
});
renderPopup();
const closeBtn = document.querySelector('#close-btn');

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});