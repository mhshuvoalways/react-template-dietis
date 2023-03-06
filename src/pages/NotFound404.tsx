import React from "react";
import { Link } from "react-router-dom";

const NotFound404: React.FC = () => {
  return (
    <div className="pagenotfound">
      <div>
        <p className="pagenotfound-text">Page not found</p>
        <Link to="/" className="pagenotfound-go-back">
          Go back to home page
        </Link>
      </div>
    </div>
  );
};

export default NotFound404;
