import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Navigation from '../components/navigation';
import 'prismjs/themes/prism-okaidia.css';
import '../styles/layout.css';

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
        <Navigation />
      </header>
      {children}
      <footer className="site-footer">
        <p>
          &copy; {new Date().getFullYear()} Matt Budde &bull; Crafted with{' '}
          <span role="img" aria-label="love">
            ❤️
          </span>{' '}
          and <a href="https://gatsbyjs.org">Gatsby</a>
        </p>
      </footer>
    </div>
  );
};
