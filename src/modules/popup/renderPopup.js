export const popup = document.querySelector('#popup');
export const homeSection = document.querySelector('#homepage');

export const renderPopup = (data) => {
  // keep this console.log to check the data fetched in the console
  console.log(data.sprites.front_default); // eslint-disable-line

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
  `;
  popup.innerHTML = content;

  const closeBtn = document.querySelector('#close-btn');
  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    homeSection.style.display = 'flex';
  });
};
