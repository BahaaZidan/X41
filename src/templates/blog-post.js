import React from "react";
import { graphql } from "gatsby";
import Layout from "../layouts";
import SEO from "../components/seo";
import ContactMe from "../components/contact-me";

export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  return (
    <Layout langKey={post.fields.langKey}>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <article>
        <h1>{post.frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
          style={{ marginBottom: "2rem" }}
        />
        <ContactMe ar={post.fields.langKey === "ar"} />
      </article>
    </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      fields {
        langKey
      }
      excerpt
    }
  }
`;
