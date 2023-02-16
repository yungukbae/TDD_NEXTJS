import React, { ReactNode, FC, createContext, useReducer } from "react";

enum ActionType {
  INITIALIZE = "INITIALIZE",
  SIGN_IN = "SIGN_IN",
  SIGN_UP = "SIGN_UP",
  SIGN_OUT = "SIGN_OUT",
}

type InitializeAction = {
  type: ActionType.INITIALIZE;
  payload: {
    isAuthenticated: boolean;
    user: User | null;
  };
};

type SignInAction = {
  type: ActionType.SIGN_IN;
  payload: {
    user: User;
  };
};

type SignUpAction = {
  type: ActionType.SIGN_UP;
  payload: {
    user: User;
  };
};

type SignOutAction = {
  type: ActionType.SIGN_OUT;
};

type Action = InitializeAction | SignUpAction | SignInAction | SignOutAction;

export interface User {
  id: string;
  email?: string;
  name?: string;
  [key: string]: any;
}

interface State {
  isAuthenticated: boolean;
  isInitialized: boolean;
  user: User | null;
}

const initState: State = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const handler = {
  INITIALIZE: (state: State, action: InitializeAction) => {
    const { isAuthenticated, user } = action.payload;
    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  },
  SIGN_IN: (state: State, action: SignInAction) => {
    const { user } = action.payload;
    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
  SIGN_UP: (state: State, action: SignUpAction) => {
    const { user } = action.payload;
    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
  SIGN_OUT: (state: State) => {
    return {
      ...state,
      isAuthenticated: false,
      user: null,
    };
  },
};

const reducer = (prev: State, action: Action) => {
  return prev;
};

interface AuthContextType extends State {
  signIn: (email: string, password: string) => Promise<void>;
  signUp: () => Promise<void>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>({
  ...initState,
  signIn: () => Promise.resolve(),
  signUp: () => Promise.resolve(),
  signOut: () => Promise.resolve(),
});

interface AuthProviderType {
  children?: ReactNode;
}

export const AuthProvider: FC<AuthProviderType> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

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
        ...state,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
