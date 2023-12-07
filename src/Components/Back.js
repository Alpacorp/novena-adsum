import * as React from "react";
import { Link } from "react-router-dom";

const Back = (url) => {
  return (
    <Link to={url.url}>
      <img src={url.src} alt="volver" className="back" />
    </Link>
  );
};

export default Back;
