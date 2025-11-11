export const getAnnouncementAPI = async () => await fetch("https://6882916c21fa24876a9b3c72.mockapi.io/announcement").then((res) => {
    return res.json()
})