export const postAnnouncementAPI = async (data) => {
  console.log(data);
  try {
    const response = await fetch("https://67c950b40acf98d07089b4a2.mockapi.io/announcement", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
