import fetchPopup from '../fetchPopup.js';
import renderHomepage from './renderHomepage.js';

const loopRender = (j) => {
  for (let i = 0; i <= j; i += 1) {
    fetchPopup(i, renderHomepage);
  }
};

export default loopRender;