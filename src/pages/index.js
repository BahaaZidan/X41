import "./index.css";
import React from "react";
import { Link } from "gatsby";

export default function Home() {
  return (
    <div className="langEntryContainer">
      <Link to="/ar" className="indexLink">
        <h3 className="indexH3">العربية</h3>
      </Link>
      <Link to="/en" className="indexLink">
        <h3 className="indexH3">English</h3>
      </Link>
    </div>
  );
}
