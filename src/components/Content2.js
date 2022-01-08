import React, { useContext } from "react";
import { NewThemeContext } from "../context/ThemeContext2";

const Content2 = () => {
  const theme = useContext(NewThemeContext);
  return (
    <div style={theme}>
      <button
        onClick={() => {
          theme.changesTheme();
        }}
      >
        {theme.name === "dark" ? "Light temaya geç" : "Dark temaya geç"}
      </button>
      <h3>İkinci Yöntem</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore qui
        nostrum quo? Iusto nostrum hic sit delectus minima quis commodi. Soluta
        nobis aperiam nostrum accusantium sunt odit doloremque odio minus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore qui
        nostrum quo? Iusto nostrum hic sit delectus minima quis commodi. Soluta
        nobis aperiam nostrum accusantium sunt odit doloremque odio minus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore qui
        nostrum quo? Iusto nostrum hic sit delectus minima quis commodi. Soluta
        nobis aperiam nostrum accusantium sunt odit doloremque odio minus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore qui
        nostrum quo? Iusto nostrum hic sit delectus minima quis commodi. Soluta
        nobis aperiam nostrum accusantium sunt odit doloremque odio minus.
      </p>
    </div>
  );
};

export default Content2;
