import React, { createContext, useReducer, useEffect } from 'react';
import { ThemeReducer } from '../Reducers/ThemeReducer';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [theme, dispatch] = useReducer(ThemeReducer, 'light', () => {
    const localData = localStorage.getItem('theme');
    return localData ? localData : 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;