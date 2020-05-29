import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const UsesPage = ({ data: { site } }) => {
  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta
          name="description"
          content={'Contact page of ' + site.siteMetadata.description}
        />
      </Helmet>
      <div className="grids">Uses page</div>
    </Layout>
  );
};
export default UsesPage;

export const pageQuery = graphql`
  query UsesPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
