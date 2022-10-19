import renderPopup from './renderPopup.js';

const fetchPopup = async (id) => {
  const response = fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const data = await (await response).json();
  // keep this console.log to check the data fetched in the console
  console.log(data.sprites.front_default); // eslint-disable-line
  renderPopup(data);
};

export default fetchPopup;