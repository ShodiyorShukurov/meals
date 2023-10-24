import React from "react";
import { Context as MealsContext } from "../../Context/MealsContext";
import { getMealsByCategory } from "../../Service/getData";
import { useParams } from "react-router-dom";
import MealsItem from "../MealsItem";

const MealsList = () => {
  const { state, dispatch } = React.useContext(MealsContext);
  const { category } = useParams();

  React.useEffect(() => {
    getMealsByCategory(category).then((res) =>
      dispatch({
        type: "GET_MEALS_CATEGORY",
        payload: res.data.meals,
      })
    );
  }, []);

  return (
    <div className="container">
      <ul className="row mt-3">
        {state.mealsCategoriezed
          .slice(0, state.mealsCategoriezedCount)
          .map((meal) => (
            <MealsItem key={meal.idMeal} {...meal} />
          ))}
      </ul>
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-outline-primary my-5 mx-auto"
          type="button"
          onClick={() =>
            dispatch({
              type: "MEALS_CATEGORIEZED_COUNT",
            })
          }
        >
          See more
        </button>
      </div>
    </div>
  );
};

export default MealsList;
