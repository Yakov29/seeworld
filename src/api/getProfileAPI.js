export const getProfileAPI = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    
    if (user && user.email && user.password) {
      try {
        const response = await fetch(
          `https://67c950b40acf98d07089b4a2.mockapi.io/users?email=${user.email}&password=${user.password}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const users = await response.json();
        if (users.length > 0) {
          return users[0];  
        }
        return null; 
      } catch (error) {
        return null;
      }
    }
    return null;  
  };
  