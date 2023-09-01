import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [userID, setUserID] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [token, setToken] = useState(null);

  const updateUserProfile = (profileData) => {
    setUserID(profileData.userID);
    setName(profileData.name);
    setEmail(profileData.email);
  };
  const contextFunctions = {
    updateUserProfile,
    setToken,
  };

  return (
    <UserContext.Provider
      value={{
        userID,
        name,
        email,
        token,
        ...contextFunctions,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
