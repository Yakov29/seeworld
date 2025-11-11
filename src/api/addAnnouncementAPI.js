export const addAnnouncementAPI = async (announcementData) => {
  const response = await fetch("https://6882916c21fa24876a9b3c72.mockapi.io/announcement", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(announcementData),
  });
  return response.json();
};
