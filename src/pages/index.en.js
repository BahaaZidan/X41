import "./index.css";
import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../layouts";
import SEO from "../components/seo";

export default function Home({ data }) {
  return (
    <Layout>
      <SEO
        title={data.site.siteMetadata.en.title}
        description={data.site.siteMetadata.en.description}
      />
      <div>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges
          .filter(({ node }) => node.fields.langKey === "en")
          .map(({ node }) => (
            <div key={node.id}>
              <Link to={node.fields.slug} className="indexLink">
                <h3 className="indexH3">
                  {node.frontmatter.title}{" "}
                  <span className="indexSpan">— {node.frontmatter.date}</span>
                </h3>
                <p>{node.excerpt}</p>
              </Link>
            </div>
          ))}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        en {
          title
          description
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
            langKey
          }
          excerpt
        }
      }
    }
  }
`;
