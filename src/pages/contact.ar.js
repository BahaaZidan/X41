import React from "react";
import { graphql } from "gatsby";

import Layout from "../layouts";

export default function About({ data }) {
  return (
    <Layout langKey="ar">
      <h1>السلام عليكم</h1>
      <ul>
        <li>
          <a href="mailto:gebnatorky@gmail.com">gebnatorky@gmail.com</a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/bahaazidan/"
          >
            Linkedin
          </a>
        </li>
      </ul>
    </Layout>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
