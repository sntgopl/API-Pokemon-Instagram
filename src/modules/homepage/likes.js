class Like {
    constructor(likes, id) {
        this.likes = likes;
        this.item_id = id;
    }
}

const addLike = async () => {
    const likes = new Like(1, '1');
    const api = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
    const appId = 'IJd6Da8dwtRjMMAE92Va';
    const url = `${api}${appId}/comments`;
  
    const response = fetch(`${url}`, {
      method: 'POST',
      body: JSON.stringify(likes),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const fetched = await (await response).text();
    console.log(fetched); // eslint-disable-line
};

const getLikes = async (id) => {
    const api = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
    const appId = 'IJd6Da8dwtRjMMAE92Va';
    const url = `${api}${appId}/comments?item_id=${id}`;
  
    const response = fetch(`${url}`);
    const data = await (await response).json();
    renderLikes(data);
};
  

export { addLike, getLikes };