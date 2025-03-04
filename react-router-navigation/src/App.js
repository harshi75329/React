import React from "react";
import { BrowserRouter as Router, Route, NavLink, Routes } from "react-router-dom";

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function App() {
  return (
    <Router>
      <header>
        <nav>
          <NavLink to="/" style={{ marginRight: "10px" }} activeStyle={{ fontWeight: "bold" }}>Home</NavLink>
          <NavLink to="/about" activeStyle={{ fontWeight: "bold" }}>About</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
