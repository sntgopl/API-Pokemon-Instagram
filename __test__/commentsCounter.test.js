import { commentsMock, htmlMock } from '../__mocks__/commentsMock.js';
import renderComments from '../src/modules/popup/renderComments.js';

describe('commentsCounter', () => {
  test('should return the quantity of created comments (li)', () => {
    // Arrange
    document.body.innerHTML = htmlMock;

    // Act
    renderComments(commentsMock);

    // Assert
    const commentsList = document.getElementsByTagName('li').length;
    expect(commentsList).toBe(1);
  });

  test('should return the value displayed by commentsCounter', () => {
    // Arrange
    document.body.innerHTML = htmlMock;

    // Act
    renderComments(commentsMock);

    // Assert
    const title = document.querySelector('#comments-title').innerHTML;
    const counter = Number(title.slice(10, title.length - 1));
    expect(counter).toBe(1);
  });
});