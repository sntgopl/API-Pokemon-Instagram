import Comment from './newComment.js';

const newComment = async () => {
  const comment = new Comment('1', 'username', 'comment');
  const api = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
  const appId = 'pYoDA8k987Eio52IyF50';
  const url = `${api}${appId}/comments`;

  const response = fetch(`${url}`, {
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