import React, { createContext, useState } from "react";

export type AuthDataType = {
  token: string;
  isAuth: boolean;
  user: {
    id: number;
    name: string;
  };
};

export const AuthContext = createContext({
  authData: {} as AuthDataType,
  login: () => {},
  logout: () => {},
});

const AuthContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
    const [authState, setAuthState] = useState({
        isAuth: false,
        token: "",
        user:{
            id:0,
            name:""
        }
    } as AuthDataType)

  const myLogin = () => {
    setAuthState({
        isAuth:true,
        token:"123",
        user:{
            id:1,
            name:"امین رضا"
        }
    })
  };
  const myLogout = () => {
    setAuthState({
        isAuth:false,
        token:"",
        user:{
            id:0,
            name:""
        }
    })
  };

  return (
    <AuthContext.Provider
      value={{
        login: myLogin,
        logout: myLogout,
        authData:authState
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;