export const postAnnouncementAPI = async (data) => {
    try {
        await fetch("https://67c950b40acf98d07089b4a2.mockapi.io/announcements", {method: "POST", body: JSON.stringify(data)}).then((responce) => responce.json())
    } catch (error) {
        console.log(error)
    }
    
}