import React from "react";
import { Context as MealsContext } from "../Context/MealsContext";
import CategoryList from "../components/CategoryList";
import MealsFiltred from "../components/MealsFilter";
import { getAllMealsByCategories } from "../Service/getData";


const HomePage = () => {
  const { state, dispatch } = React.useContext(MealsContext);

  React.useEffect(() => {
    getAllMealsByCategories().then((res) =>
      dispatch({
        type: "GET_ALL_CATEGORIES",
        payload: res.data.categories,
      })
    );
  }, []);

  return (
    <div className="container">
      <div className="my-3">
        <MealsFiltred />
      </div>
      <div className="my-3">
        <CategoryList
          meals={state.meals.slice(0, state.mealsCount)}
          dispatch={dispatch}
        />
      </div>
    </div>
  );
};

export default HomePage;
