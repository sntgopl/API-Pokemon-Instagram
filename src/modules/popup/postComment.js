import Comment from './newComment.js';

const postComment = async () => {
  const comment = new Comment('1', 'username', 'comment');
  const api = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
  const appId = 'IJd6Da8dwtRjMMAE92Va';
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

export default postComment;