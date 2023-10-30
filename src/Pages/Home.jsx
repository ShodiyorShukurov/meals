import React from "react";
import { Context as MealsContext } from "../Context/MealsContext";
import CategoryList from "../components/CategoryList";
import MealsFiltred from "../components/MealsFilter";
import { getAllMealsByCategories } from "../Service/getData";
import PuffLoader from "react-spinners/PuffLoader";

const HomePage = () => {
  const { state, dispatch } = React.useContext(MealsContext);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    getAllMealsByCategories().then((res) => {
      dispatch({
        type: "GET_ALL_CATEGORIES",
        payload: res.data.categories,
      });
      setLoading(false);
    });
  }, []);

  return (
    <div className="container">
      <div className="my-3">
        <MealsFiltred />
      </div>
      <div className="my-3">
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
          <CategoryList
            meals={state.meals.slice(0, state.mealsCount)}
            dispatch={dispatch}
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;
