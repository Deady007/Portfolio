// src/pages/Blog.js
import React from 'react';
import BlogCard from '../components/BlogCard';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    { id: 1, title: 'First Blog Post', description: 'This is the description for blog post 1' },
    // Add more blog posts here
  ];

  return (
    <div className="blog">
      <h2>Blog</h2>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
