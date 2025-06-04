// import React, { createContext, useState, useEffect } from "react";


// export const UserContext = createContext();

// const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);


//   // Function to update user data
//   const updateUser = (userData) => {
//     setUser(userData);
//   };

//   // Function to clear user data (e.g., on logout)
//   const clearUser = () => {
//     setUser(null);
//   };

//   return (
//     <UserContext.Provider
//       value={{
//         user,
//         updateUser,
//         clearUser,
//       }}
//     >
//       {children}
//     </UserContext.Provider>
//   );
// };
// export default UserProvider;
import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // // Load user data from localStorage on app start
  // useEffect(() => {
  //   const storedUser = localStorage.getItem("user");
  //   if (storedUser) {
  //     setUser(JSON.parse(storedUser));
  //   }
  // }, []);
  useEffect(() => {
  const storedUser = localStorage.getItem('user');
  const storedToken = localStorage.getItem('token');
  console.log("Loaded from localStorage - User:", storedUser);
  console.log("Loaded from localStorage - Token:", storedToken);
  if (storedUser) setUser(JSON.parse(storedUser));
}, []);


  // Function to update user data and persist to localStorage
  const updateUser = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // Function to clear user data (e.g., on logout)
  const clearUser = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        updateUser,
        clearUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
