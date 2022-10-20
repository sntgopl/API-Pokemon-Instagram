import getPokemon from '../apis/getPokemon.js';
import getComments from '../popup/getComments.js';
import { popup, renderPopup, homeSection } from '../popup/renderPopup.js';

const pokemonList = [];

const mmm = (data) => {
		pokemonList.push(data);
};

const write = (list) => {
	homeSection.innerHTML = list.map((data) => `
		<div class="card">
		<img class="pokemon-img" src="${data.sprites.front_default}" alt="Pokemon img">
		<div class="card-data">
			<h2 class="pokemon-name">${data.name.toUpperCase().slice(0,1)+data.name.slice(1, data.name.length)}</h2>
			<div class="like-section"><i class="fa-regular fa-heart heart"></i><p>5 likes</p></div>
		</div>
		<button class="comment-button">Comments</button>
		</div>
		`)
		.join(' ');
		const commentBtn = document.querySelectorAll('.comment-button');
		commentBtn.forEach((button, index) => {
			button.addEventListener('click', () => {
				getPokemon(index + 1, renderPopup);
				getComments(index + 1);
				popup.style.display = 'flex';
				homeSection.style.display = 'none';
				console.log(index)
			})
		})
}

const fetchList = async (n) => {
    for (let i = 1; i < n; i += 1) {
			await getPokemon(i, mmm);
    }
		write(pokemonList);
		console.log(pokemonList);
}

export default fetchList;