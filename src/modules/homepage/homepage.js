import getPokemon from '../apis/getPokemon.js';

const homeSection = document.querySelector('#homepage');

const pokemonList = [];

const mmm = (data) => {
    pokemonList.push(data);
};

const write = (list) => {
	homeSection.innerHTML = list.map((data) => `
		<div class="card">
		<img class="pokemon-img" src="${data.sprites.front_default}" alt="Pokemon img">
		<div class="card-data">
			<h2 class="pokemon-name">${data.name}</h2>
			<div class="like-section"><i class="fa-regular fa-heart heart"></i><p>5 likes</p></div>
		</div>
		<button class="comment-button">Comments</button>
		</div>
		`)
		.join(' ');
}

const fetchList = async (n) => {
    for (let i = 1; i < n; i += 1) {
			await getPokemon(i, mmm);
    }
		write(pokemonList);
}

export default fetchList;