import "./index.css";
import React from "react";
import { useStaticQuery, Link, graphql } from "gatsby";

import ThemeToggler from "../components/theme-toggler";

const LayoutTemplate = ({
  className,
  headerLink,
  headerText,
  contactLink,
  contactText,
  children,
}) => {
  return (
    <div className={`layoutContainer ${className}`}>
      <div className="layoutContent">
        <header className="layoutHeader">
          <Link to={headerLink}>
            <h3 className="layoutTitle">{headerText}</h3>
          </Link>
          <ThemeToggler />
        </header>
        {children}
      </div>
    </div>
  );
};

export default ({ children, langKey }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            ar {
              title
            }
            en {
              title
            }
          }
        }
      }
    `
  );

  if (langKey === "en") {
    return (
      <LayoutTemplate
        headerLink="/en"
        headerText={data.site.siteMetadata.en.title}
        contactLink="/en/contact/"
        contactText="Contact"
      >
        {children}
      </LayoutTemplate>
    );
  }

  if (langKey === "ar") {
    return (
      <LayoutTemplate
        className="ar"
        headerLink="/ar"
        headerText={data.site.siteMetadata.ar.title}
        contactLink="/ar/contact/"
        contactText="تواصل"
      >
        {children}
      </LayoutTemplate>
    );
  }

  return <>{children}</>;
};
