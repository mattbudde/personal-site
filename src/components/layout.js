import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Navigation from '../components/navigation';
import 'prismjs/themes/prism-okaidia.css';
import { Gradient } from 'react-gradient';
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
    <React.Fragment>
      <Gradient
        gradients={[
          ['rgb(231, 75, 255)', 'rgb(255, 243, 75)'],
          ['rgb(255, 78, 167)', 'rgb(167, 255, 78)'],
          ['rgb(255, 127, 63)', 'rgb(63, 197, 255)'],
          ['rgb(255, 228, 74)', 'rgb(195, 74, 255)'],
        ]}
        property="border"
        element="div"
        className="gradient"
      >
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
      </Gradient>
    </React.Fragment>
  );
};
