import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MealsItem = ({ idMeal, strMealThumb, strMeal }) => {
  return (
    <>
      <li className="col-3 mb-3">
        <div className="card h-100">
          <img
            className="card-img-top"
            src={strMealThumb}
            alt={strMeal}
            width="300"
            height="300"
          />
          <div className="card-body">
            <h3 className="card-title">{strMeal}</h3>
          </div>
          <div className="card-footer text-center">
            <Link to={`/meal/${idMeal}`}>More info</Link>
          </div>
        </div>
      </li>
    </>
  );
};

MealsItem.propTypes = {
  strMealThumb: PropTypes.string,
  strMeal: PropTypes.string,
  idMeal: PropTypes.string,
};

export default MealsItem;
