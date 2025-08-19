export const addToFavorites = async (userId, announcementId) => {
  try {
    const res = await fetch(`https://6882916c21fa24876a9b3c72.mockapi.io/users/${userId}`);
    if (!res.ok) throw new Error("Не удалось получить профиль пользователя");

    const user = await res.json();
    const currentFavorites = Array.isArray(user.favorites) 
      ? user.favorites.map(fav => {
          if (fav.announcementId) return fav;
          const keys = Object.keys(fav);
          if (keys.length > 0) return { announcementId: fav[keys[0]] };
          return null;
        }).filter(Boolean) 
      : [];

    const exists = currentFavorites.some(fav => fav.announcementId === announcementId);
    if (exists) {
      alert("Це оголошення вже додано в обране");
      return;
    }

    const updatedFavorites = [...currentFavorites, { announcementId }];

    const updateRes = await fetch(`https://6882916c21fa24876a9b3c72.mockapi.io/users/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...user, favorites: updatedFavorites })
    });

    if (!updateRes.ok) throw new Error("Не вдалося оновити обране");

    alert("Додано в обране");
  } catch (error) {
    console.error(error);
    alert("Сталася помилка при додаванні в обране");
  }
};
