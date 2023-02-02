import React, { ReactNode, FC, createContext } from "react";

interface AuthContextType {
  signIn: (email: string, password: string) => Promise<void>;
  signUp: () => Promise<void>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>({
  signIn: () => Promise.resolve(),
  signUp: () => Promise.resolve(),
  signOut: () => Promise.resolve(),
});

interface AuthProviderType {
  children?: ReactNode;
}

const AuthProvider: FC<AuthProviderType> = ({ children }) => {
  const signIn = () => {
    return Promise.resolve();
  };

  const signUp = () => {
    return Promise.resolve();
  };

  const signOut = () => {
    return Promise.resolve();
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
