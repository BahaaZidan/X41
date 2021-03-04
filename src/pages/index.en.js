import "./index.css";
import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../layouts";
import SEO from "../components/seo";
import ContactMe from "../components/contact-me";

export default function Home({ data }) {
  const posts = data.allMarkdownRemark.edges.filter(
    ({ node }) => node.fields.langKey === "en"
  );
  return (
    <Layout langKey="en">
      <SEO
        title={data.site.siteMetadata.en.title}
        description={data.site.siteMetadata.en.description}
      />
      <ContactMe />
      <div>
        <h4>{posts.length} Posts</h4>
        {posts.map(({ node }) => (
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
