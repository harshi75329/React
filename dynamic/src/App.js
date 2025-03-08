import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Post from './Post'; // Dynamic Post Page
import NotFound from './NotFound'; // 404 Page
import './style.css'; // Import the CSS file

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/post/:id" element={<Post />} /> {/* Dynamic Post Page */}
  <Route path="*" element={<NotFound />} /> {/* 404 Page */}
</Routes>

      </div>
    </Router>
  );
};

export default App;