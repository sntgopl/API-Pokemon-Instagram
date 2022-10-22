import { pokemons, mhtml } from './mock.js';
import { writeList, pokemonList, mmm } from '../homepage.js';

describe('Card counter', () => {
  test('should return the number of cards displayed on screen when the page is loaded', () => {
    // Arrange
    document.body.innerHTML = mhtml;

    // Act
    const content = writeList(pokemons);
    const section = document.querySelector('#homepage');
    const counter = document.createElement('div');
    counter.innerHTML = content;
    section.appendChild(counter);
    const number = document.querySelectorAll('.card');

    // Assert
    expect(number.length).toBe(3);
  });

  test('should return the length of items pushed from the API into mapped array', () => {
    // Arrange

    // Act
    mmm(pokemons);

    // Assert
    const result = pokemonList[0].length;
    expect(result).toBe(3);
  });
});