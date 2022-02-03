import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

const BlogPage = ({ data }) => {
  const blogPostFiles = data.allFile.nodes.map(node => (
    <li key={node.id}>
      {node.name}
    </li>
  ));
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {blogPostFiles}
      </ul>
    </Layout>
  );
}

export const postsDataQuery = graphql`
query {
  allFile {
    nodes {
      id
      name
    }
  }
}
`;

export default BlogPage;