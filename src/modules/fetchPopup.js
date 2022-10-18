const fetchPopup = async (id) => {
  const response = fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const data = await (await response).json();
  console.log(data);
};

export default fetchPopup;