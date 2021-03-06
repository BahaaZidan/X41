import React from "react";
import { Link } from "gatsby";

const Welcome_Ar = () => (
  <p>
    السلام عليكم. يمكن أيضاً <Link to="/ar/contact">التواصل معي</Link>.
  </p>
);

const Welcome_En = () => (
  <p>
    Welcome to my blog. You can also find me <Link to="/en/contact">here</Link>.
  </p>
);

const Thanks_Ar = () => (
  <p>
    شكراً لإكمالك المقال. لا تتردد في <Link to="/ar/contact">التواصل معي</Link>
  </p>
);

const Thanks_En = () => (
  <p>
    Thank you for reading through. Don't hesitate to{" "}
    <Link to="/en/contact">contact me</Link>.
  </p>
);

const infereContactComponent = (ar, thanks) => {
  if (thanks) {
    if (ar) {
      return Thanks_Ar;
    }
    return Thanks_En;
  }
  if (ar) return Welcome_Ar;
  return Welcome_En;
};

export default ({ ar, thanks }) => {
  const Comp = infereContactComponent(ar, thanks);
  return <div>{<Comp />}</div>;
};
