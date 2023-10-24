import React from "react";
import { Context as MealsContext } from "../../Context/MealsContext";
import { getAllMealsByCategories } from "../../Service/getData";

const MealsFiltred = () => {
  const { dispatch } = React.useContext(MealsContext);

  const handleChange = (evt) => {
    const SEARCH_QUERY = new RegExp(evt.target.value.trim(), "gi");

    if (evt.target.value.length === 0) {
      getAllMealsByCategories().then((res) =>
        dispatch({
          type: "GET_ALL_CATEGORIES",
          payload: res.data.categories,
        })
      );
    }

    dispatch({
      type: "SEARCH_MEALS",
      payload: SEARCH_QUERY,
    });
  };

  return (
    <form>
      <input
        className="form-control"
        name="search"
        type="search"
        onChange={handleChange}
        placeholder="🥗 Search your favourite food..."
      />
    </form>
  );
};

export default MealsFiltred;
