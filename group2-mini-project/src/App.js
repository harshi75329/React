import React, { useState, useEffect } from "react";
import "./styles.css"; // Importing the external CSS file

const App = () => {
  const [isVisible, setIsVisible] = useState(false); // Track text visibility
  const [data, setData] = useState([]); // Store API data

  useEffect(() => {
    fetch("https://dummyjson.com/posts") // Fetch data from alternative API
      .then((response) => response.json())
      .then((json) => setData(json.posts.slice(0, 5))) // Store first 5 posts
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container">
      {/* Toggle Button */}
      <button className="toggle-button" onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Text
      </button>

      {/* Show Text When Visible */}
      {isVisible && <p className="toggle-text">This is some text that can be toggled.</p>}

      {/* Fetch and Display API Data */}
      <h2 className="heading">Fetched Posts</h2>
      <ul className="post-list">
        {data.map((post) => (
          <li key={post.id} className="post-item">
            <h3 className="post-title">{post.title}</h3>
            <p className="post-body">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;