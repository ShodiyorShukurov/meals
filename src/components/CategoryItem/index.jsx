import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CategoryItem = ({ strCategory, strCategoryThumb }) => {

  return (
    <li className="col-12 col-md-6 col-lg-3 col-xl-3 mb-3">
      <div className="card text-center shadow-lg">
        <img
          className="card-img-top mx-auto"
          src={strCategoryThumb}
          alt={strCategory}
          width={300}
          height={300}
        />
        <div className="card-body">
          <h3 className="card-title text-center">{strCategory}</h3>
        </div>
        <div className="card-footer text-center ">
          <Link
            to={`/meals/${strCategory.toLowerCase()}`}
            className="btn btn-outline-primary rounded-0 w-100"
          >
            Watch {strCategory.toLowerCase()}
          </Link>
        </div>
      </div>
    </li>
  );
};

CategoryItem.propTypes = {
  strCategory: PropTypes.string,
  strCategoryThumb: PropTypes.string,
};

export default CategoryItem;
