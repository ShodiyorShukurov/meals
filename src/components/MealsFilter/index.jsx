import React from "react";
import { Context as MealsContext } from "../../Context/MealsContext";

const MealsFiltred = () => {
  const { state, dispatch } = React.useContext(MealsContext);

  const [searchMeals, setSearchMeals] = React.useState("");

  return (
    <form>
      <input
        className="form-control w-25"
        name="search"
        type="search"
        onChange={(evt) => {
          const search = evt.target.value;
          setSearchMeals(search);
          const filtred = state?.meals.filter((meal) =>
            meal.strCategory.toLowerCase().includes(search.toLowerCase())
          );
          dispatch({
            type: "SEARCH",
            payload: filtred,
          });
        }}
        placeholder="🥗 Search your favourite food..."
      />
    </form>
  );
};

export default MealsFiltred;
