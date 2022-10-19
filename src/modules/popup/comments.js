import renderComments from './renderComments.js';

const comments = async (id) => {
  const api = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
  const appId = 'pYoDA8k987Eio52IyF50';
  const url = `${api}${appId}/comments?item_id=${id}`;

  const response = fetch(`${url}`);
  const data = await (await response).json();
  console.log(data); // eslint-disable-line
  renderComments();
};

export default comments;