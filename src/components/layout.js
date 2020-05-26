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
          ['rgb(255, 173, 173)', 'rgb(255, 214, 165)'],
          ['rgb(253, 255, 182)', 'rgb(202, 255, 191)'],
          ['rgb(155, 246, 255)', 'rgb(160, 196, 255)'],
          ['rgb(189, 178, 255)', 'rgb(255, 198, 255)'],
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
