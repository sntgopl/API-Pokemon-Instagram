const postComment = async (comment) => {
  const api = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
  const appId = 'IJd6Da8dwtRjMMAE92Va';
  const url = `${api}${appId}/comments`;

  fetch(`${url}`, {
    method: 'POST',
    body: JSON.stringify(comment),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export default postComment;