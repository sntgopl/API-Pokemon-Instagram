import Comment from './newComment.js';
import postComment from './postComment.js';
import getComments from './getComments.js';

const popup = document.querySelector('#popup');
const homeSection = document.querySelector('#homepage');

const renderPopup = (data) => {
  const content = `
  <button type="button" id="close-btn">X</button>
  <img class="popup-img" src="${data.sprites.front_default}" alt="popup image">
  <h2>${data.name.toUpperCase().slice(0, 1) + data.name.slice(1, data.name.length)}</h2>
  <div class="attributes">
    <p>Main Ability: ${data.abilities[0].ability.name.toUpperCase().slice(0, 1) + data.abilities[0].ability.name.slice(1, data.abilities[0].ability.name.length)}</p>
    <p>Secondary Ability: ${data.abilities[1].ability.name.toUpperCase().slice(0, 1) + data.abilities[1].ability.name.slice(1, data.abilities[1].ability.name.length)}</p>
    <p>Height : ${data.height} m</p>
    <p>Weight: ${data.weight} kg</p>
  </div>
  <div id="comments-container">
    <h3 id="comments-title"></h3>
    <ul id="comments-list">
    </ul>
  </div>
  <form id="comment-form">
    <h3>Add a comment</h3>
    <input type="text" id="name" placeholder="Your name" required>
    <textarea id="comment" placeholder="Your insights" required></textarea>
    <button type="submit" id="comment-btn">Comment</button>
  `;
  popup.innerHTML = content;

  const closeBtn = document.querySelector('#close-btn');
  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    homeSection.style.display = 'flex';
  });

  const commentForm = document.querySelector('#comment-form');
  commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;
    const newComment = new Comment(data.id, name, comment);
    postComment(newComment);
    commentForm.reset();
    alert('Comment added successfully'); // eslint-disable-line
    getComments(data.id);
  });
};

// Is it needed to export these to DOM elements (popup, homeSEction)?
export { popup, homeSection, renderPopup };