import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MealsItem = ({ idMeal, strMealThumb, strMeal }) => {
  return (
    <>
      <li className="col-12 col-md-6 col-lg-3 col-xl-3 mb-3">
        <div className="card text-center shadow-lg h-100">
          <img
            className="card-img-top mx-auto"
            src={strMealThumb}
            alt={strMeal}
            width="300"
            height="300"
          />
          <div className="card-body">
            <h5 className="card-text text-center">{strMeal}</h5>
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
