import {
  createContext,
  useEffect,
  useContext,
  useReducer,
  useCallback,
} from 'react';

import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const initialState = {
  currentUser: localStorage.getItem('currentUser')
    ? JSON.parse(localStorage.getItem('currentUser'))
    : null,
  loading: false,
  error: null,
};

export const AuthProvider = ({ children }) => {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};
