import React, { useContext } from "react";
import ThemeContext3 from "../context/ThemeContext3";

const Content3 = () => {
  const { theme, setTheme } = useContext(ThemeContext3);
  return (
    <div className={theme}>
      <h3>Üçüncü Yöntem (Patika)</h3>
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

export default Content3;
