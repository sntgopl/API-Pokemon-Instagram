const popup = document.querySelector('#popup');

const renderPopup = (data) => {
  // keep this console.log to check the data fetched in the console
  console.log(data.sprites.front_default); // eslint-disable-line

  const content = `
  <img class="popup-img" src="${data.sprites.front_default}" alt="popup image">
  <h2>${data.name}</h2>
  <div class="attributes">
    <p>Attribute 1: Value 1</p>
    <p>Attribute 2: Value 2</p>
    <p>Attribute 3: Value 3</p>
    <p>Attribute 4: Value 4</p>
  </div>
  <div id="comments-container">
    <h3 id="comments-title"></h3>
    <ul id="comments-list">
    </ul>
  </div>
  <button type="button" id="close-btn">X</button>
  `;
  popup.innerHTML = content;

  const closeBtn = document.querySelector('#close-btn');
  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });
};

export default renderPopup;