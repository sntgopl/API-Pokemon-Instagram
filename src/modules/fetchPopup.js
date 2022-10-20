import write from './homepage/renderHomepage.js';

const fetchPopup = async (id, fn) => {
  const response = fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const data = await (await response).json();
  // keep this console.log to check the data fetched in the console
  console.log(data.sprites.front_default); // eslint-disable-line
  fn(data);
};

const fetchLoop = (n) => {
  for (let i = 0; i < n; i += 1) {
    fetchPopup(i, write);
  }
};

fetchLoop(3);

export default fetchPopup;