class Like {
  constructor(likes, id) {
    this.likes = likes;
    this.item_id = id;
  }
}

const addLike = async (id) => {
  const likes = new Like(1, id);
  const api = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
  const appId = 'IJd6Da8dwtRjMMAE92Va';
  const url = `${api}${appId}/likes`;

  const response = fetch(`${url}`, {
    method: 'POST',
    body: JSON.stringify(likes),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const fetched = await (await response).text();
  //  console.log(fetched); // eslint-disable-line
};

const getLikes = async (id) => {
  const api = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
  const appId = 'IJd6Da8dwtRjMMAE92Va';
  const url = `${api}${appId}/likes?item_id=${id}`;

  const response = fetch(`${url}`);
  const data = await (await response).json();

  const e = document.createElement('p');
  e.classList.add('likes');
  e.innerHTML = `${data[id].likes}`;
  const likeDiv = document.querySelectorAll('.like-section');
  likeDiv[id].appendChild(e);
  console.log(data);
};

const getAllLikes = async (n) => {
  for (let i = 0; i < n; i += 1) {
    await getLikes(i);
  }
};

export { addLike, getAllLikes };