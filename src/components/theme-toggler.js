import * as themeTogglerStyles from "./theme-toggler.module.css";
import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

export default () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <label className={themeTogglerStyles.toggler}>
          <input
            type="checkbox"
            onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
            checked={theme === "dark"}
          />
          {theme === "dark" ? "Light mode" : "Dark mode"}
        </label>
      )}
    </ThemeToggler>
  );
};
