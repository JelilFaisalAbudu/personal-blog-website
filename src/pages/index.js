import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
      <p>
        Hi there! I 'm the proud creator of this site, which I built with Gatsby.
      </p>
      <StaticImage
        alt="Zen, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/dog-zen.jpeg"
      />
    </Layout>
  )
}

export default IndexPage;
