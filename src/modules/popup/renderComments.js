const popup = document.querySelector('#popup');

const renderComments = () => {
  const content = `
  <div id="comments-container">
    <h2>Comments</h2>
    <ul id="comments-list">
      <li>date1 user1 comment1</li>
      <li>date2 user2 comment2</li>
      <li>date3 user3 comment3</li>
      <li>date4 user4 comment4</li>
    </ul>
  </div>
  `;
  popup.insertAdjacentHTML('beforeend', content);
};

export default renderComments;