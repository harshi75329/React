import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then(response => setPosts(response.data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container">
      <button 
        onClick={() => setIsVisible(!isVisible)} 
        className="toggle-button"
      >
        {isVisible ? "Hide" : "Show"} Text
      </button>
      {isVisible && <p className="toggle-text">Hello! This is Group-2 mini project toggleable text.</p>}
      
      <h2 className="title">Posts from API:</h2>
      <ul className="post-list">
        {posts.map(post => (
          <li key={post.id} className="post-item">{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
