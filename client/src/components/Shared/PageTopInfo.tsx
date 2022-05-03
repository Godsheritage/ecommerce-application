import { Link } from "react-router-dom";
import { PRODUCT_TOP_INFO_TYPES } from "../../../../types";

const PageTopInfo:React.FC<PRODUCT_TOP_INFO_TYPES> = ({link, page}) => {
  return (
    <div className="page-top-info">
      <div className="container">
        <h4>{page}</h4>
        <div className="site-pagination">
          <Link to="/" className="card-link">Home</Link> /<Link to={link} >{page}</Link>
        </div>
      </div>
    </div>
  );
};

export default PageTopInfo;
