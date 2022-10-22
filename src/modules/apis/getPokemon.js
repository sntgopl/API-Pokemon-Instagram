const getPokemon = async (id, renderingFunction) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const data = await (await response).json();
  renderingFunction(data);
};

export default getPokemon;