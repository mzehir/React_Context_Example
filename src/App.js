import React, { useState } from "react";
import Content from "./components/Content";
import Content2 from "./components/Content2";
import Content3 from "./components/Content3";
import Content4 from "./components/Content4";

import { ThemeContext2 } from "./context/ThemeContext2";
import { ThemeProvider } from "./context/ThemeContext3";
import { ThemeProviderCustom } from "./context/ThemeContext4";

import "./App.css";

const themes = {
  dark: {
    backgroundColor: "#383838",
    color: "#fff",
  },
  light: {
    backgroundColor: "#fff",
    color: "#000",
  },
};

export const ThemeContext = React.createContext(themes.dark);

function App() {
  const [theme, setTheme] = useState(themes.dark);

  return (
    <div className="App">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            <button
              onClick={() => {
                if (theme === themes.dark) {
                  setTheme(themes.light);
                } else {
                  setTheme(themes.dark);
                }
              }}
            >
              {theme === themes.dark ? "Ligth temaya geç" : "Dark temaya geç"}
            </button>
            <ThemeContext.Provider value={theme}>
              <Content></Content>
            </ThemeContext.Provider>
          </div>
          <div>
            <ThemeContext2>
              <Content2></Content2>
            </ThemeContext2>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            <ThemeProvider>
              <Content3></Content3>
            </ThemeProvider>
          </div>
          <div>
            <ThemeProviderCustom>
              <Content4></Content4>
            </ThemeProviderCustom>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
