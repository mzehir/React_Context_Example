import React from "react";
import { useCustomContext } from "../context/ThemeContext4";

const Content4 = () => {
  const { theme, setTheme } = useCustomContext();
  return (
    <div className={theme}>
      <h3>Dördüncü Yöntem (Patika - Custom Context Hook)</h3>
      <button
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        Change Theme
      </button>
      <div>Active Theme: {theme}</div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore qui
        nostrum quo? Iusto nostrum hic sit delectus minima quis commodi. Soluta
        nobis aperiam nostrum accusantium sunt odit doloremque odio minus.
      </p>
    </div>
  );
};

export default Content4;
