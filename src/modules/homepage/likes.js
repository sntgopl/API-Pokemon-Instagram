class Like {
  constructor(likes, id) {
    this.likes = likes;
    this.item_id = id;
  }
}

const addLike = async (id) => {
  const likes = new Like(1, id);
  const api = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
  const appId = 'pYoDA8k987Eio52IyF50';
  const url = `${api}${appId}/likes`;

  const response = fetch(`${url}`, {
    method: 'POST',
    body: JSON.stringify(likes),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const fetched = await (await response).text();
  const heart = document.querySelectorAll('.heart');
  heart[id].className = 'fa-solid fa-heart heart';
  //  console.log(fetched); // eslint-disable-line
};

const getLikes = async (id) => {
  const api = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
  const appId = 'pYoDA8k987Eio52IyF50';
  const url = `${api}${appId}/likes?item_id=${id}`;

  const response = fetch(`${url}`);
  const data = await (await response).json();
  const result = await data.find(({ item_id }) => item_id === id);
  const e = document.querySelectorAll('.likes');
  e[id].innerHTML = result.likes;
};

const getAllLikes = async (n) => {
  for (let i = 0; i < n; i += 1) {
    await getLikes(i);
  }
};

export { addLike, getAllLikes, getLikes };