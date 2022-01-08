import React, { useState } from "react";

const themes = {
  dark: {
    backgroundColor: "#383838",
    color: "#fff",
    name: "dark",
  },
  light: {
    backgroundColor: "#fff",
    color: "red",
    name: "light",
  },
};

const NewThemeContext = React.createContext(themes.light);

function ThemeContext2({ children }) {
  const [selectTheme, setSelectTheme] = useState(themes.light);
  const changesTheme = () => {
    if (selectTheme === themes.light) {
      setSelectTheme(themes.dark);
    } else {
      setSelectTheme(themes.light);
    }
  };
  return (
    <NewThemeContext.Provider value={{ ...selectTheme, changesTheme }}>
      {children}
    </NewThemeContext.Provider>
  );
}

export { NewThemeContext, ThemeContext2 };
