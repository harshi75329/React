import React, { useContext } from "react";
import { ThemeContext, ThemeProvider } from "./ThemeContext";

function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div style={{ 
      backgroundColor: theme === "light" ? "#fff" : "#333", 
      color: theme === "light" ? "#000" : "#fff", 
      padding: "20px",
      minHeight: "100vh",
      textAlign: "center"
    }}>
      <p>Current Theme: {theme}</p>
      <button 
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
          border: "none",
          backgroundColor: theme === "light" ? "#000" : "#fff",
          color: theme === "light" ? "#fff" : "#000",
          borderRadius: "5px"
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
  );
}
