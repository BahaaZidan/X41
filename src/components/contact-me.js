import * as contactMeStyles from "./contact-me.module.css";
import React from "react";
import { Link } from "gatsby";

export default ({ ar }) => {
  return (
    <div className={contactMeStyles.container}>
      <Link to={ar ? "/ar/contact" : "/en/contact"}>
        {ar ? "تواصل معي" : "Contact Me"}
      </Link>
    </div>
  );
};
