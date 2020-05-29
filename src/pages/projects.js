import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const ProjectsPage = ({ data: { site } }) => {
  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta
          name="description"
          content={'Contact page of ' + site.siteMetadata.description}
        />
      </Helmet>
      <div className="grids">Projects page</div>
    </Layout>
  );
};
export default ProjectsPage;

export const pageQuery = graphql`
  query ContactPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
