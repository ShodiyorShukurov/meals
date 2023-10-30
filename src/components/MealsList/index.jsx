import React from "react";
import { Context as MealsContext } from "../../Context/MealsContext";
import { getMealsByCategory } from "../../Service/getData";
import { useParams } from "react-router-dom";
import MealsItem from "../MealsItem";
import PuffLoader from "react-spinners/PuffLoader";

const MealsList = () => {
  const { state, dispatch } = React.useContext(MealsContext);
  const { category } = useParams();
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    getMealsByCategory(category).then((res) => {
      dispatch({
        type: "GET_MEALS_CATEGORY",
        payload: res.data.meals,
      });
      setLoading(false);
    });
  }, []);

  return (
    <div className="container">
      {loading ? (
        <div className="loader">
          <PuffLoader
            color={"red"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <ul className="row mt-3">
          {state.mealsCategoriezed
            .slice(0, state.mealsCategoriezedCount)
            .map((meal) => (
              <MealsItem key={meal.idMeal} {...meal} />
            ))}
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
        </ul>
      )}
    </div>
  );
};

export default MealsList;
