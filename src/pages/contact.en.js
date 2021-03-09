import React from "react";

import Layout from "../layouts";

export default function About() {
  return (
    <Layout langKey="en">
      <h1>Hello friend</h1>
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
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/BahaaZidan"
          >
            Github
          </a>
        </li>
      </ul>
    </Layout>
  );
}
