import React, { createContext, useEffect, useState } from "react";
import { getlocalStorage, setlocalStorage } from "../components/utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  //  localStorage.clear();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setlocalStorage();
    const { employees, admin } = getlocalStorage();
    // console.log('Local Storage Data:', { employees, admin });
    setUserData({ employees, admin });
  }, []);

  console.log('User Data:', userData);

  return (
    <div>
      <AuthContext.Provider value={userData}>
        {children}
      </AuthContext.Provider>
      
    </div>
  );
};

export default AuthProvider;