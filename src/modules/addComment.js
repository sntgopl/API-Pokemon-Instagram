import Comment from './newComment.js';

const newComment = async () => {
  const comment = new Comment('1', 'username', 'comment');
  const response = fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/pYoDA8k987Eio52IyF50/comments', {
    method: 'POST',
    body: JSON.stringify(comment),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const fetched = await (await response).text();
  console.log(fetched); // eslint-disable-line
};

export default newComment;