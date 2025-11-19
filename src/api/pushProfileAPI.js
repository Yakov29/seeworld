const pushProfileAPI = (profile) => {
  fetch("https://6882916c21fa24876a9b3c72.mockapi.io/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(profile),
  }).then((data) => {
    return data.json();
  });
};

export default pushProfileAPI;