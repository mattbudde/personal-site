import React from 'react';
import { Link } from 'gatsby';
import ThemeChanger from '../components/themeChanger';

export default (props) => (
  <nav className="navigation">
    <Link to="/">Blog</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/uses">Uses</Link>
    <ThemeChanger />
  </nav>
);
