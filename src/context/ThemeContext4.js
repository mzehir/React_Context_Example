import { createContext, useState, useContext, useEffect } from "react";

const ThemeContext4 = createContext();

export const ThemeProviderCustom = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("selectTheme4") || "light"
  );

  const values = { theme, setTheme };

  useEffect(() => {
    localStorage.setItem("selectTheme4", theme);
  }, [theme]);

  return (
    <ThemeContext4.Provider value={values}>{children}</ThemeContext4.Provider>
  );
};

export const useCustomContext = () => useContext(ThemeContext4);
