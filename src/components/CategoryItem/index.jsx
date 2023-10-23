import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CategoryItem = ({ strCategory, strCategoryThumb }) => {

  return (
    <li className="col-3 mb-4">
      <div className="card">
        <img
          className="card-img-top"
          src={strCategoryThumb}
          alt={strCategory}
          width={300}
          height={400}
        />
        <div className="card-body">
          <h3 className="card-title">{strCategory}</h3>
        </div>
        <div className="card-footer text-center">
          <Link to={`/meals/${strCategory.toLowerCase()}`} className="btn btn-primary rounded-0">
            Watch category
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
