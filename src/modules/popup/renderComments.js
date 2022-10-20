const renderComments = (comments) => {
  const commentsTitle = document.querySelector('#comments-title');
  const commentsList = document.querySelector('#comments-list');

  const commentsCount = comments.length;
  commentsTitle.innerHTML = `Comments (${commentsCount})`;

  const content = comments.map((comment) => `
  <li class="comment">${comment.creation_date} - ${comment.username} - ${comment.comment}</li>
  `).join('');
  commentsList.innerHTML = content;
};

export default renderComments;