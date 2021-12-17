import { useState, createContext, useContext, FC } from 'react';

interface ThemeContext {
  darkMode: boolean;
  setTheme?: () => void;
}

const defaultState = {
  darkMode: true,
};

const ThemeContext = createContext<ThemeContext>(defaultState);

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
