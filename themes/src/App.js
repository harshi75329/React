import React, { Suspense, useState } from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import "./style.css"; 

// Lazy load the components
const About = React.lazy(() => import("./About"));
const Contact = React.lazy(() => import("./Contact"));

const App = () => {
  return (
    <ThemeProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    </ThemeProvider>
  );
};

const Home = () => {
  const { theme, toggleTheme } = useTheme();
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="container">
      <h1>Welcome to the {theme} theme!</h1>
      <button className="toggle-button" onClick={toggleTheme}>Toggle Theme</button>
      <button className="nav-button" onClick={() => setShowAbout(prev => !prev)}>About</button>
      <button className="nav-button" onClick={() => setShowContact(prev => !prev)}>Contact</button>
      
      {showAbout && (
        <Suspense fallback={<div>Loading about section...</div>}>
          <About />
        </Suspense>
      )}

      {showContact && (
        <Suspense fallback={<div>Loading contact section...</div>}>
          <Contact />
        </Suspense>
      )}
    </div>
  );
};

export default App;