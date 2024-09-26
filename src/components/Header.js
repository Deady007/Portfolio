// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => (
  <header>
    <h1>Viral Parmar</h1>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
