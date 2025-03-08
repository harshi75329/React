import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.css'; // Import the CSS file

const Post = () => {
  const { id } = useParams(); // Get dynamic parameter from the URL
  const [post, setPost] = useState(null);

  // Fetch data dynamically based on the post ID
  useEffect(() => {
    // Simulate fetching data from an API or database
    const fetchPost = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const data = await response.json();
      setPost(data);
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="container">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;