import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

class DarkThemeToggler extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <div>
            <input
              id="dark_mode_toggle"
              type="checkbox"
              className="checkbox"
              onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
              checked={theme === "dark"}
            />{" "}
            <label htmlFor="dark_mode_toggle" className="switch"></label>
          </div>
        )}
      </ThemeToggler>
    )
  }
}

export default DarkThemeToggler
