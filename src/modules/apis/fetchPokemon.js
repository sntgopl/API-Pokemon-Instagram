// import renderPopup from './renderPopup.js';

const fetchPokemon = async (id, fn) => {
  const response = fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const data = await (await response).json();
  fn(data);
};

export default fetchPokemon;