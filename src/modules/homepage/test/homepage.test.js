import { pokemons, mhtml } from './mock.js';
import { writeList, pokemonList, mmm } from '../homepage.js';

describe('Card counter', () => {
  test('should return the number of cards displayed on screen when the page is loaded', () => {
    // Arrange
    document.body.innerHTML = mhtml;

    // Act
    const content = writeList(pokemons);
    // crear html para anexarle con innerhtml
    // seleccionar con queryselector
    const section = document.querySelector('#homepage');
    const counter = document.createElement('div');
    counter.innerHTML = content;
    section.appendChild(counter);
    const number = document.querySelectorAll('.card');

    // Assert
    // const card = document.getElementsByTagName('section').length;
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