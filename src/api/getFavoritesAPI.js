export const getFavoritesAPI = async (userId) => {
  try {
    const res = await fetch(`https://6882916c21fa24876a9b3c72.mockapi.io/users/${userId}`);
    if (!res.ok) throw new Error("Не удалось получить пользователя");

    const user = await res.json();
    return Array.isArray(user.favorites) ? user.favorites : [];
  } catch (error) {
    console.error(error);
    return [];
  }
};
