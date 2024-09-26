// src/components/BlogCard.js
import React from 'react';
import './BlogCard.css';

const BlogCard = ({ post }) => {
  return (
    <div className="blog-card">
      <h3>{post.title}</h3>
      <p>{post.description}</p>
      <button>Read More</button>
    </div>
  );
};

export default BlogCard;
