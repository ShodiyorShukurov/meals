import CategoryItem from "../CategoryItem";
import PropTypes from "prop-types";

const CategoryList = ({ meals, dispatch }) => {
  return (
    <div className="d-flex flex-column justify-content-center">
      <ul className="row">
        {meals.length > 0 &&
          meals.map((meal) => <CategoryItem key={meal.idCategory} {...meal} />)}
      </ul>
      <button
        className="btn btn-outline-primary my-5 mx-auto"
        type="button"
        onClick={() =>
          dispatch({
            type: "MEALS_CATEGORY_COUNT",
          })
        }
      >
        See more
      </button>
    </div>
  );
};

CategoryList.propTypes = {
  meals: PropTypes.array,
  dispatch: PropTypes.func,
};

export default CategoryList;
