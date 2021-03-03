import "./index.css";
import React from "react";
import { useStaticQuery, Link, graphql } from "gatsby";

import ThemeToggler from "../components/theme-toggler";

export default function Layout({ children }) {
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

  if (window.location.href.includes("/en")) {
    return (
      <div className="layoutContainer">
        <div className="layoutContent">
          <header className="layoutHeader">
            <Link to={`/en`}>
              <h3 className="layoutTitle">{data.site.siteMetadata.en.title}</h3>
            </Link>
            <ThemeToggler />
            <Link to={`/en/contact/`}>Contact</Link>
          </header>
          {children}
        </div>
      </div>
    );
  }

  if (window.location.href.includes("/ar")) {
    return (
      <div className="layoutContainer ar">
        <div className="layoutContent">
          <header className="layoutHeader">
            <Link to={`/ar`}>
              <h3 className="layoutTitle">{data.site.siteMetadata.ar.title}</h3>
            </Link>
            <ThemeToggler />
            <Link to={`/ar/contact/`}>تواصل</Link>
          </header>
          {children}
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
