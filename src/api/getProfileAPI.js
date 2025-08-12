export const getProfileAPI = async (email, password) => {
        console.log("getProfileAPI", email, password);
 
      try {
        const response = await fetch(
          `https://6882916c21fa24876a9b3c72.mockapi.io/users?email=${email}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
       
        const users = await response.json();
        if (users.length > 0) {
            console.log(users[0])
          return users[0]
        }
        return null; 
      } catch (error) {
        return null;
      }
    
    return null;  
  };
  