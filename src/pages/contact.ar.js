import React from "react";
import { graphql } from "gatsby";

import Layout from "../layouts";

export default function About({ data }) {
  return (
    <Layout langKey="ar">
      <h1>Hello friend</h1>
      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>
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
