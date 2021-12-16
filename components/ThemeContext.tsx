import { useState, createContext, useContext, FC } from 'react';

type IThemeContext = {
  darkMode: boolean;
  setTheme?: () => void;
};

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

const defaultState = {
  darkMode: true,
};

const ThemeContext = createContext<IThemeContext>(defaultState);

const ThemeProvider: FC = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const setTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
export const useThemeContext = () => useContext(ThemeContext);
