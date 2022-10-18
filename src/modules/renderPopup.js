const popup = document.querySelector('#popUp');

const renderPopup = (data) => {
  const content = `
  <img class="popup-img" src="${data.sprites.front_default}" alt="popup image">
  <h2>${data.name}</h2>
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