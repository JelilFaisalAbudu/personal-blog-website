import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

// markup
const IndexPage = ({ data }) => {
  const {
    site: {
      siteMetadata: {
        description
      }
    }
  } = data;

  return (
    <Layout pageTitle='Home Page'>
      <p>
        {description}
      </p>
      <StaticImage
        alt="Zen, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/dog-zen.jpeg"
      />
    </Layout>
  )
}

export const homePageDataQuery = graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
  }
`;

export default IndexPage;
