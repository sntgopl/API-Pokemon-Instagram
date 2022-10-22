const renderComments = (comments) => {
  const commentsTitle = document.querySelector('#comments-title');
  const commentsList = document.querySelector('#comments-list');

  const commentsCount = comments.length || 0;
  commentsTitle.innerHTML = `Comments (${commentsCount})`;

  if (commentsCount > 0) {
    const content = comments.map((comment) => `
    <li class="comment">(${comment.creation_date}) - ${comment.username}: ${comment.comment}</li>
    `).join('');
    commentsList.innerHTML = content;
  } else {
    commentsList.innerHTML = '<li class="comments-none">No comments yet. Be the first to comment!</li>';
  }
};

export default renderComments;