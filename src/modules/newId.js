const newId = async () => {
  const response = fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {
    method: 'POST',
    // body: JSON.stringify(gameName),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const fetched = await (await response).text();
  console.log(fetched); // eslint-disable-line
};

export default newId;