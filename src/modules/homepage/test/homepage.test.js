import { pokemonList, mhtml } from './mock.js';
import { writeList } from '../homepage.js';
import homeSection from '../../popup/renderPopup.js';

describe('Card counter', () => {
  test('should return the number of cards displayed on screen when the page is loaded', () => {
    writeList(pokemonList);
    expect(homeSection.length).toBe(3);
  });
});