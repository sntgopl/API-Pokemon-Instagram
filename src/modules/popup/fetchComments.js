import renderComments from './renderComments.js';

const fetchComments = async (id) => {
  const api = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
  const appId = 'IJd6Da8dwtRjMMAE92Va';
  const url = `${api}${appId}/comments?item_id=${id}`;

  const response = fetch(`${url}`);
  const data = await (await response).json();
  renderComments(data);
};

export default fetchComments;