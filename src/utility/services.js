const getPlayerList = () => {
  return fetch("https://cle-fe-challenge-services.vercel.app/api/players", {
    headers: {
      Accept: "application/json"
    },
    method: "GET"
  });
};

const getPlayerInfo = (playerId) => {
  return fetch(
    `https://cle-fe-challenge-services.vercel.app/api/players?playerId=${playerId}`,
    {
      headers: {
        Accept: "application/json"
      },
      method: "GET"
    }
  );
};

const getPitches = (playerId) => {
  return fetch(
    `https://cle-fe-challenge-services.vercel.app/api/pitches?playerId=${playerId}`,
    {
      headers: {
        Accept: "application/json"
      },
      method: "GET"
    }
  );
};

export default { getPlayerList, getPlayerInfo, getPitches };
