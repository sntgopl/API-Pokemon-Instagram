const popup = document.querySelector('#popUp');

const renderPopup = (data) => {
  const content = `
  <img class="popup-img" src="https://thumbs.dreamstime.com/z/future-sci-fi-spaceship-front-view-against-black-background-36644652.jpg" alt="template image">
  <h2>${data}</h2>
  <p>Attribute 1: Value 1</p>
  <p>Attribute 2: Value 2</p>
  <p>Attribute 3: Value 3</p>
  <p>Attribute 4: Value 4</p>
  <button type="button" id="close-btn">X</button>
  `;
  popup.innerHTML = content;

  const closeBtn = document.querySelector('#close-btn');
  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });
};

export default renderPopup;