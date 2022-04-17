import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import { pageTopInfo } from "../types";

const PageTopInfo:React.FC<pageTopInfo> = ({link, page}) => {
  return (
    <div className="page-top-info">
      <div className="container">
        <h4>{page}</h4>
        <div className="site-pagination">
          <Link to="/">Home</Link> /<Link to={link} >{page}</Link>
        </div>
      </div>
    </div>
  );
};

export default PageTopInfo;
