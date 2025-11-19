export const postAnnouncementAPI = async (data) => {
  try {
    const response = await fetch("https://6882916c21fa24876a9b3c72.mockapi.io/announcement", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return await response.json();
  } catch (error) {
    // Handle error appropriately, e.g., throw it or return a specific error object
  }
};