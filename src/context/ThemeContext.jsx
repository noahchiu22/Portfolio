import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const ThemeContext = createContext();

const THEME_COOKIE_KEY = 'portfolio_theme_mode';

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    // 從 cookie 中讀取主題設置，如果沒有則默認為 'light'
    return Cookies.get(THEME_COOKIE_KEY) || 'light';
  });

  // 當主題改變時，更新 cookie
  useEffect(() => {
    Cookies.set(THEME_COOKIE_KEY, mode, { expires: 365 }); // cookie 有效期為一年
  }, [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => {
      switch (prevMode) {
        case 'light':
          return 'dark';
        case 'dark':
          return 'tech';
        case 'tech':
          return 'light';
        default:
          return 'light';
      }
    });
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeMode = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeMode must be used within a ThemeProvider');
  }
  return context;
}; 