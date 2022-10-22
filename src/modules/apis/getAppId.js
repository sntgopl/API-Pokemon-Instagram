const getAppId = async () => {
  const response = fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  await (await response).text();
};

const gameKey = 'pYoDA8k987Eio52IyF50';

export { gameKey, getAppId };

// App ID: 1
// pYoDA8k987Eio52IyF50

// App ID: 2 (current)
// IJd6Da8dwtRjMMAE92Va
