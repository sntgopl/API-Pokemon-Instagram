import _ from 'lodash';
import './style.css';

const closeBtn = document.querySelector('#close-btn');

closeBtn.addEventListener('click', () => {
  closeBtn.parentNode.style.display = 'none';
});