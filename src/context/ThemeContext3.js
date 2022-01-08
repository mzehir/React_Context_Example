import { createContext, useState, useEffect } from "react";

const ThemeContext3 = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("selectTheme") || "light"
  );

  const values = { theme, setTheme };

  useEffect(() => {
    localStorage.setItem("selectTheme", theme);
  }, [theme]);
  return (
    <ThemeContext3.Provider value={values}>{children}</ThemeContext3.Provider>
  );
};

export default ThemeContext3;
