import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import ProjectCard from "../components/projectCard";

const ProjectsPage = ({ data: { site } }) => {
  return (
    <Layout>
      <Helmet>
        <title>Work — {site.siteMetadata.title}</title>
        <meta
          name="description"
          content={"Work page of " + site.siteMetadata.description}
        />
      </Helmet>
      <div className="hero-header">
        <div className="headline">Work</div>
        <div className="primary-content">
          What i like to work on in my spare time!
        </div>
      </div>
      <div className="project-grids">
        <ProjectCard />
      </div>
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
